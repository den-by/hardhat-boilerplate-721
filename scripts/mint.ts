import { ethers } from 'hardhat';
import {config} from "dotenv";

async function main() {
  config();
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const recieverAddress = process.env.RECIEVER_ADDRESS;
  if(!contractAddress || !recieverAddress) {
    throw new Error("CONTRACT_ADDRESS or RECIEVER_ADDRESS is not defined in .env file");
  }
  const myToken = await ethers.getContractAt(
    "MyToken",
    contractAddress
  );

  const mintTokens = await myToken.safeMint(recieverAddress);

  console.log(
    `Transaction Hash: https://mumbai.polygonscan.com/tx/${mintTokens.hash}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
