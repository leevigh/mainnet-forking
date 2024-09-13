import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import * as dotenv from "dotenv";
// dotenv.config();
require("dotenv").config({ path: ".env" });

const ALCHEMY_MAINNET_API_KEY_URL = process.env.ALCHEMY_MAINNET_API_KEY_URL;
// const SECRET_KEY = vars.get("SECRET_KEY");

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      forking: {
        url: ALCHEMY_MAINNET_API_KEY_URL!,
      }
    }
  },
  // lockGasLimit: 200000000000,
  // gasPrice: 10000000000,
};

export default config;
