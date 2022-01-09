import React from "react";

import { addresses, abis } from "@project/contracts";
import { ethers, utils, BigNumber} from "ethers";
//import { parseEther, bigNumber } from 'ethers/utils'
const claims = require("config/claims.json")

// Airdrop Helper Functions
const AirdropHelper = {
    combinedHash : (first, second) => {
        if (!first) {
          return second
        }
        if (!second) {
          return first
        }
      
        return Buffer.from(
          utils.solidityKeccak256(['bytes32', 'bytes32'], [first, second].sort(Buffer.compare)).slice(2),
          'hex'
        )
    },
      
    toNode : (index, account, amount) => {
    const pairHex = utils.solidityKeccak256(['uint256', 'address', 'uint256'], [index, account, amount])
    return Buffer.from(pairHex.slice(2), 'hex')
    },
      
    verifyProof : (
    index,
    account,
    amount,
    proof,
    root
    ) => {
    let pair = AirdropHelper.toNode(index, account, amount)
    for (const item of proof) {
        pair = AirdropHelper.combinedHash(pair, item)
    }
    
    return pair.equals(root)
    },
      
    getNextLayer : (elements) => {
    return elements.reduce((layer, el, idx, arr) => {
        if (idx % 2 === 0) {
        // Hash the current element with its pair element
        layer.push(AirdropHelper.combinedHash(el, arr[idx + 1]))
        }
    
        return layer
    }, [])
    },
      
    getRoot : (balances) => {
    let nodes = balances
        .map(({ account, amount, index }) => AirdropHelper.toNode(index, account, amount))
        // sort by lexicographical order
        .sort(Buffer.compare)
    
    // deduplicate any eleents
    nodes = nodes.filter((el, idx) => {
        return idx === 0 || !nodes[idx - 1].equals(el)
    })
    
    const layers = []
    layers.push(nodes)
    
    // Get next layer until we reach the root
    while (layers[layers.length - 1].length > 1) {
        layers.push(AirdropHelper.getNextLayer(layers[layers.length - 1]))
    }
    
    return layers[layers.length - 1][0]
    },


    verifyAddress: async (user, contract) => {
        const enableLogs = 1;
        const merkleRootHex = claims.merkleRoot
        const merkleRoot = Buffer.from(merkleRootHex.slice(2), 'hex')
        if(claims.claims[user]){
            const claim = claims.claims[user]
        const proof = claim.proof.map((p) => Buffer.from(p.slice(2), 'hex'))
        const verified = (AirdropHelper.verifyProof(claim.index, user, claim.amount, proof, merkleRoot))
        let txPromise = await contract.isClaimed(claim.index)
        const isClaimed = await txPromise
        const claimable = !isClaimed
        const BNamount = BigNumber.from(claim.amount)
        const amount = BNamount.toNumber()
        // const amount = ethers.utils.parseEther(num)
        return({ index: claim.index, account: user, amount, proof, merkleRoot, verified, claimable})
        }
        else
        return({verified: false})
    },

  

}

export default AirdropHelper;
