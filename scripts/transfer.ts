import { config } from "dotenv";
import { ethers } from "hardhat";

async function main() {
  config();
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const recieverAddress = process.env.RECIEVER_ADDRESS;
  const transfertoaddress = process.env.TRANSFER_TO_ADDRESS;
  const tokenid = Number(process.env.TOKEN_ID);
  if (!contractAddress || !recieverAddress || !transfertoaddress || tokenid === undefined) {
    throw new Error("CONTRACT_ADDRESS or RECIEVER_ADDRESS or TOKEN_ID is not defined in .env file");
  }
  const myToken = await ethers.getContractAt("MyToken", contractAddress);

  const transaction = await myToken.transferFrom(recieverAddress, transfertoaddress, tokenid );

  console.log(`Transaction Hash: https://mumbai.polygonscan.com/tx/${transaction.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
