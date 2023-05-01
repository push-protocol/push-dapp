
export enum ChatStatus {
    ACTIVE = 'ACTIVE',
    PENDING = 'PENDING',
    ENDED = 'ENDED'
}

export interface SpaceMember{
    wallet: string;
    publicKey: string;
    isAdmin: boolean;
    image: string;
}

export interface Space{
    members: SpaceMember[];
    pendingMembers:SpaceMember[];
    contractAddressERC20: string | null;
    numberOfERC20: number;
    contractAddressNFT: string | null;
    numberOfNFTTokens: number;
    verificationProof: string;
    spaceImage: string | null;
    spaceName: string;
    isPublic: boolean;
    spaceDescription: string | null;
    spaceCreator: string;
    spaceId: string;
    scheduleAt?: Date | number;
    scheduleEnd?: Date | number;
    status: ChatStatus | null;
}

export interface Spaces {
    [key: string]: Space;
}
  
export interface UserSpaces {
    [key: string]: {
        spaces:Spaces,
        spaceRequests: Spaces,
    };
}