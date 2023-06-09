import { config } from "dotenv";
import { ethers } from "hardhat";

async function main() {
  config();
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const recieverAddress = process.env.RECIEVER_ADDRESS;
  if (!contractAddress || !recieverAddress) {
    throw new Error("CONTRACT_ADDRESS or RECIEVER_ADDRESS is not defined in .env file");
  }
  const myToken = await ethers.getContractAt("MyToken", contractAddress);

  const transaction = await myToken.safeMint(recieverAddress);

  console.log(`Transaction Hash: https://mumbai.polygonscan.com/tx/${transaction.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
