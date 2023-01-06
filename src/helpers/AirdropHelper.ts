// React + Web3 Essentials
import { BigNumber, ethers, utils } from 'ethers';

// Internal Configs
const claims = require('config/airdrop/claims.json');

interface IVerifyProofProps {
  index: number;
  account: string;
  amount: number;
  proof: any;
  root: Buffer;
}

interface IVerifyAddressReturnType {
  index?: string;
  account?: string;
  amount?: number;
  proof?: any;
  merkleRoot?: Buffer;
  verified: boolean;
  claimable?: boolean;
}

// Airdrop Helper Functions
const AirdropHelper = {
  combinedHash: (first: Buffer, second: any): Buffer => {
    if (!first) {
      return second;
    }
    if (!second) {
      return first;
    }

    return Buffer.from(
      utils.solidityKeccak256(['bytes32', 'bytes32'], [first, second].sort(Buffer.compare)).slice(2),
      'hex'
    );
  },

  toNode: (index: number, account: string, amount: number) => {
    const pairHex: string = utils.solidityKeccak256(['uint256', 'address', 'uint256'], [index, account, amount]);
    return Buffer.from(pairHex.slice(2), 'hex');
  },

  verifyProof: ({ index, account, amount, proof, root }: IVerifyProofProps): boolean => {
    let pair: Buffer = AirdropHelper.toNode(index, account, amount);
    for (const item of proof) {
      pair = AirdropHelper.combinedHash(pair, item);
    }

    return pair.equals(root);
  },

  getNextLayer: (elements: any[]) => {
    return elements.reduce((layer, el, idx, arr) => {
      if (idx % 2 === 0) {
        // Hash the current element with its pair element
        layer.push(AirdropHelper.combinedHash(el, arr[idx + 1]));
      }

      return layer;
    }, []);
  },

  getRoot: (balances: any[]): boolean => {
    let nodes: Buffer[] = balances
      .map(({ account, amount, index }) => AirdropHelper.toNode(index, account, amount))
      // sort by lexicographical order
      .sort(Buffer.compare);

    // deduplicate any eleents
    nodes = nodes.filter((el, idx) => {
      return idx === 0 || !nodes[idx - 1].equals(el);
    });

    const layers: any[] = [];
    layers.push(nodes);

    // Get next layer until we reach the root
    while (layers[layers.length - 1].length > 1) {
      layers.push(AirdropHelper.getNextLayer(layers[layers.length - 1]));
    }

    return layers[layers.length - 1][0];
  },

  verifyAddress: async (user: string, contract: ethers.Contract): Promise<IVerifyAddressReturnType> => {
    const merkleRootHex: any = claims.merkleRoot;
    const merkleRoot: Buffer = Buffer.from(merkleRootHex.slice(2), 'hex');
    if (claims.claims[user]) {
      const claim = claims.claims[user];
      const proof = claim.proof.map((p) => Buffer.from(p.slice(2), 'hex'));
      const verified = AirdropHelper.verifyProof({
        index: claim?.index,
        account: user,
        amount: claim?.amount,
        proof,
        root: merkleRoot,
      });
      let txPromise = await contract.isClaimed(claim.index);
      const isClaimed = await txPromise;
      const claimable = !isClaimed;
      const BNamount = BigNumber.from(claim.amount);
      const amount = BNamount.toNumber();
      // const amount = ethers.utils.parseEther(num)
      return { index: claim.index, account: user, amount, proof, merkleRoot, verified, claimable };
    } else return { verified: false };
  },
};

export default AirdropHelper;
