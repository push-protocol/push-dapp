import { ethers } from "ethers";


export const formatTokens = (tokens) => {
    return tokens.div(ethers.BigNumber.from(10).pow(18)).toString();
};

export const numberWithCommas = (x) => {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const bn = function (number, defaultValue = null) { if (number == null) { if (defaultValue == null) { return null } number = defaultValue } return ethers.BigNumber.from(number) }
export const bnToInt = function (bnAmount) { return bnAmount.div(bn(10).pow(18)) }