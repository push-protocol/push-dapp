import EthCrypto from 'eth-crypto';
import {encrypt, decrypt} from 'eccrypto';
import { publicKeyConvert, publicKeyVerify } from 'secp256k1-v4';

var CryptoJS = require("crypto-js");

const CryptoHelper = {
  // To Encrypt with AES
  encryptWithAES: function(message, key) {
    return CryptoJS.AES.encrypt(message, key).toString();
  },
  // To Decrypt with AES
  decryptWithAES: function(message, key) {
    let bytes  = CryptoJS.AES.decrypt(message, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  },
  // To Form Encryted Secret, no more than 15 characters supported
  encryptWithECIES: async function(message, publicKey) {
    const compressedKey = EthCrypto.publicKey.compress(publicKey);

    const encryptedSecret = await this.encryptWithPublicKey(message, compressedKey);

    // Not using it since sqlite2 has some error with this
    // const compressedEncryptedSecret = EthCrypto.hex.compress(encryptedSecret);

    return encryptedSecret;
  },
  // To Form Decrypted Secret, no more than 15 characters supported
  decryptWithECIES: async function(message, privateKey) {
    // Message is always compressed, not using because sqlite2 has some error with this
    //const uncompressedMessage = EthCrypto.hex.decompress(message).substr(2); // to remove 0x

    return await this.decryptWithPrivateKey(message, privateKey);
  },
  // Encryption with public key
  encryptWithPublicKey: async function(message, publicKey) {
    // Convert compressed public key, starts with 03 or 04
    const pubKeyUint8Array = Uint8Array.from(
      new Buffer(publicKey, 'hex')
    );
    //console.log("[ENCRYPTION] Public Key Uint8Array: " + pubKeyUint8Array);

    const convertedKeyAsUint8Array = publicKeyConvert(pubKeyUint8Array, false);
    //console.log("[ENCRYPTION] Public Key Converted: " + convertedKeyAsUint8Array);

    const convertedPublicKeyHex = new Buffer(convertedKeyAsUint8Array);
    //console.log("[ENCRYPTION] Converted Public Key Buffer: " + convertedPublicKeyHex);

    const pubKey = new Buffer(convertedPublicKeyHex, 'hex');
    //console.log("[ENCRYPTION] pubkey getting sentout for encrypt: " + pubKey);

    return encrypt(
        pubKey,
        Buffer(message)
    ).then(encryptedBuffers => {
      const cipher = {
          iv: encryptedBuffers.iv.toString('hex'),
          ephemPublicKey: encryptedBuffers.ephemPublicKey.toString('hex'),
          ciphertext: encryptedBuffers.ciphertext.toString('hex'),
          mac: encryptedBuffers.mac.toString('hex')
      };
      // use compressed key because it's smaller
      // const compressedKey = new Buffer.from(publicKeyConvert(Web3Helper.getUint8ArrayFromHexStr(cipher.ephemPublicKey), true)).toString('hex')
      const input = Uint8Array.from(
        new Buffer(cipher.ephemPublicKey, 'hex')
      );
      const keyConvert = publicKeyConvert(input, true)
      // console.log("[ENCRYPTION] Coverted key: " + keyConvert);

      const keyConvertBuffer = new Buffer(keyConvert);
      // console.log("[ENCRYPTION] Coverted key in buffer : " + keyConvertBuffer);
      // console.log(keyConvertBuffer);

      //console.log(keyConvert);
      const compressedKey = keyConvertBuffer.toString('hex')
      // console.log("[ENCRYPTION] Compressed key in buffer : ");
      // console.log(compressedKey);

      const ret = Buffer.concat([
        new Buffer(cipher.iv, 'hex'), // 16bit
        new Buffer(compressedKey, 'hex'), // 33bit
        new Buffer(cipher.mac, 'hex'), // 32bit
        new Buffer(cipher.ciphertext, 'hex') // var bit
      ]).toString('hex')

      return ret
    });
  },
  // Decryption with public key
  decryptWithPrivateKey: async function(message, privateKey) {
    let encrypted = message;
    const buf = new Buffer(encrypted, 'hex');
    // console.log("[DECRYPTION] Buffer Passed: " + buf);

    encrypted = {
      iv: buf.toString('hex', 0, 16),
      ephemPublicKey: buf.toString('hex', 16, 49),
      mac: buf.toString('hex', 49, 81),
      ciphertext: buf.toString('hex', 81, buf.length)
    };
    // decompress publicKey
    // encrypted.ephemPublicKey = new Buffer.from(publicKeyConvert(Web3Helper.getUint8ArrayFromHexStr(encrypted.ephemPublicKey), true)).toString('hex')
    const input = Uint8Array.from(new Buffer(encrypted.ephemPublicKey, 'hex'));
    const keyConvert = publicKeyConvert(input, false)
    // console.log("[DECRYPTION] Coverted key: " + keyConvert);

    const keyConvertBuffer = new Buffer(keyConvert);
    // console.log("[DECRYPTION] Coverted key in buffer : " + keyConvertBuffer);
    // console.log(keyConvertBuffer);

    //console.log(keyConvert);
    const uncompressedKey = keyConvertBuffer.toString('hex')
    // console.log("[DECRYPTION] Uncompressed key in buffer : ");
    // console.log(uncompressedKey);

    encrypted.ephemPublicKey = uncompressedKey;
    const twoStripped = privateKey.substring(2)

    const encryptedBuffer = {
      iv: new Buffer(encrypted.iv, 'hex'),
      ephemPublicKey: new Buffer(encrypted.ephemPublicKey, 'hex'),
      ciphertext: new Buffer(encrypted.ciphertext, 'hex'),
      mac: new Buffer(encrypted.mac, 'hex')
    };

    return decrypt(
      new Buffer(twoStripped, 'hex'),
      encryptedBuffer
    ).then(decryptedBuffer => decryptedBuffer.toString());
  },
  // Testing of Encryption and Decryption from Public to Private key
  encryptionDecryptionPublicToPrivateTest: async function(privateKey) {
    const startTime = new Date();
    console.log("[ENCRYPTION / DECRYPTION TEST STARTED] - " + startTime);

    const publicKey = EthCrypto.publicKeyByPrivateKey(privateKey);
    const compressedKey = EthCrypto.publicKey.compress(publicKey); // is String
    //console.log(compressedKey);

    // const bytesCompKey = Uint8Array.from(compressedKey);
    //console.log(bytesCompKey);

    const msgToEncrypt = "PartialStringAS";
    const msg = await this.encryptWithPublicKey(msgToEncrypt, compressedKey);
    console.log("Encryped Message With compressed public key:" + msg);

    const encryptionTime = new Date().getTime() - startTime.getTime();
    console.log("[ENCRYPTION / DECRYPTION ENCRYPTION DONE] - " + encryptionTime / 1000 + " secs");

    // Decrypt this message
    const decryptMsg = await this.decryptWithPrivateKey(msg, privateKey);
    console.log("[ENCRYPTION / DECRYPTION DECRYPTED MESSAGE] - '" + decryptMsg + "'");

    const decryptionTime = new Date().getTime() - startTime.getTime() - encryptionTime;
    console.log("[ENCRYPTION / DECRYPTION DECRYPTION DONE] - " + decryptionTime / 1000 + " secs");
  },
  // To output messge payload if required
  outputMsgPayload: async function(secret, subject, message, calltoaction, imageurl, pkey) {
    // Output AES
    console.log("[AES ENCRYTED FORMAT (" + new Date() + ")");
    console.log("---------------------");
    console.log("secret --> ");
    const secretEncrypted = await this.encryptWithECIES(secret, pkey);
    const asubE = this.encryptWithAES(subject, secret);
    const amsgE = this.encryptWithAES(message, secret);
    const actaE = this.encryptWithAES(calltoaction, secret);
    const aimgE = this.encryptWithAES(imageurl, secret);

    console.log(secretEncrypted);
    console.log("asub --> ");
    console.log(asubE);
    console.log("amsg --> ");
    console.log(amsgE);
    console.log("acta --> ");
    console.log(actaE);
    console.log("aimg --> ");
    console.log(aimgE);
    console.log("decrypted secret --> ");
    console.log(await this.decryptWithECIES(secretEncrypted, pkey));
    console.log("decrypted asub --> ");
    console.log(this.decryptWithAES(asubE, secret));
    console.log("decrypted amsg --> ");
    console.log(this.decryptWithAES(amsgE, secret));
    console.log("decrypted acta --> ");
    console.log(this.decryptWithAES(actaE, secret));
    console.log("decrypted aimg --> ");
    console.log(this.decryptWithAES(aimgE, secret));
  },
  makeid: function (length) {
     var result           = '[' + new Date().toISOString() + '] ';
     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     var charactersLength = characters.length;
     for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     return result;
  }
};

export default CryptoHelper;
