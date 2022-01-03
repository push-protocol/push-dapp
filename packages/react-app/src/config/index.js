import dotenv from "dotenv";
dotenv.config();

export default  {
    etherscanToken: process.env.REACT_APP_INFURA_API_KEY || ""
}