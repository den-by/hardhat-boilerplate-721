import { config } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


config();

const privatekey = process.env.PRIVATE_KEY;
const url = process.env.RPC_URL;

if(!privatekey || !url) {
    throw new Error("Please set your PRIVATE_KEY and RPC_URL in a .env file");
}

const hardhatUserConfig: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: url,
      accounts: [privatekey],
      gas: 2100000,
      // gasPrice: 8000000000,
      blockGasLimit: 100000000429720, // whatever you want here.
    },
    // typechain: {
    //   outDir: "typechain",
    //   target: "ethers-v5",
    // },
  },
};

export default hardhatUserConfig;
