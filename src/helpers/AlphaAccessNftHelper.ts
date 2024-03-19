import { MerkleTree } from 'merkletreejs';
import { ethers } from 'ethers';

// Internal Configs
import whitelistAddressesList from 'config/alphaAccessNft/whitelist.json';

interface AlphaAccessNFTHelper {
  getRoot(): Promise<string>;
  getProof(userWalletAddress: string): Promise<string[]>;
  verify(userWalletAddress: string): Promise<boolean>;
}

const AlphaAccessNFTHelper: AlphaAccessNFTHelper = {
  async getRoot(): Promise<string> {
    const { keccak256 } = ethers.utils;
    let leaves = whitelistAddressesList.map((addr) => keccak256(addr));
    const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    // Save this value to smart contract
    const merkleRootHash = merkleTree.getHexRoot();
    return merkleRootHash;
  },

  async getProof(userWalletAddress: string): Promise<string[]> {
    let proof: string[] = [];
    const userAddress = userWalletAddress.toLowerCase();
    if (whitelistAddressesList.includes(userAddress)) {
      const { keccak256 } = ethers.utils;
      let leaves = whitelistAddressesList.map((addr) => keccak256(addr));
      const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
      let hashedAddress = keccak256(userAddress);
      proof = merkleTree.getHexProof(hashedAddress);
    }
    return proof;
  },

  async verify(userWalletAddress: string): Promise<boolean> {
    const { keccak256 } = ethers.utils;
    const userAddress = userWalletAddress.toLowerCase();
    let leaves = whitelistAddressesList.map((addr) => keccak256(addr));
    const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    let hashedAddress = keccak256(userAddress);
    const merkleRootHash = merkleTree.getHexRoot();
    let proof = merkleTree.getHexProof(hashedAddress);

    return merkleTree.verify(proof, hashedAddress, merkleRootHash);
  },
};

export default AlphaAccessNFTHelper;
