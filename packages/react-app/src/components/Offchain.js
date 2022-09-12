// const { ethers, utils } = require("ethers")
import {ethers,utils } from 'ethers';
// const { getMessage, TypedData } = require('eip-712')
// const {

//   encrypt,
//   recoverPersonalSignature,
//   recoverTypedSignatureLegacy,
//   recoverTypedSignature,
//   recoverTypedSignature_v4
// } = require('eth-sig-util');
import {  encrypt,    recoverPersonalSignature,    recoverTypedSignatureLegacy,recoverTypedSignature,recoverTypedSignature_v4} from 'eth-sig-util';
const privateKey = "PRIVATE_KEY"
var url = 'https://mainnet.infura.io/v3/9b2dd511261345bfb6073ae6b10f5a7d';
var provider = new ethers.providers.JsonRpcProvider(url);
const wallet = new ethers.Wallet(privateKey)

// // // //for creating signature
const typedData = {
  types: {
    EIP712Domain:
      [
        { name: 'name', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'address' }
      ],
    Data: [
      { name: "acta", type: "string" },
      { name: "aimg", type: "string" },
      { name: "amsg", type: "string" },
      { name: "asub", type: "string" },
      { name: "type", type: "string" },
      { name: "secret", type: "string" },
    ],
  },
  domain: {
    name: 'EPNS COMM V1',
    chainId: 42,
    verifyingContract: '0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC',
  },
  primaryType: 'Data',
  message: {
    acta: "",
    aimg: "",
    amsg: "Current BTC price is - 47,785.10USD",
    asub: "",
    type: "3",
    secret: ""
  }
}
const domain = {
  name: 'EPNS COMM V1',
  chainId: 42,
  verifyingContract: '0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC',
}

const type = {

  Data: [
    { name: "acta", type: "string" },
    { name: "aimg", type: "string" },
    { name: "amsg", type: "string" },
    { name: "asub", type: "string" },
    { name: "type", type: "string" },
    { name: "secret", type: "string" }
  ],
}

const payload = {
  "apns": {
    "payload": {
      "aps": {
        "category": "withappicon",
        "mutable-content": 1,
        "content-available": 1
      }
    },
    "fcm_options": {
      "image": "https://backend.epns.io/cache/QmSbRT16JVF922yAB26YxWFD6DmGsnSHm8VBrGUQnXTS74.jpg"
    }
  },
  "data": {
    "acta": "",
    "aimg": "",
    "amsg": "Current BTC price is - 47,785.10USD",
    "asub": "",
    "type": "3",
    "secret": ""
  },
  "android": {
    "notification": {
      "icon": "@drawable/ic_stat_name",
      "color": "#e20880",
      "image": "https://backend.epns.io/cache/QmSbRT16JVF922yAB26YxWFD6DmGsnSHm8VBrGUQnXTS74.jpg",
      "default_vibrate_timings": true
    }
  },
  "notification": {
    "body": "Dropping payload directly on push nodes at LISCON 2021.",
    "title": "EPNS x LISCON"
  }
}

const message = payload.data
console.log(message)
wallet._signTypedData(domain, type, message).then(res => {
  console.log("Signature", res)
  console.log("Length %s", res.length)
  const recovered = recoverTypedSignature_v4({
    data: typedData,
    sig: res,
  })
  console.log("Recovered Account", recovered)
})