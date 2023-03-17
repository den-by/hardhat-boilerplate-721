const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const recieverAddress = process.env.RECIEVER_ADDRESS;
  const myToken = await hre.ethers.getContractAt(
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
