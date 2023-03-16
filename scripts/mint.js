const hre = require("hardhat");
require("dotenv").config();

async function main() {

    const contractAddress = process.env.CONTRACT_ADDRESS;
    const recieverAddress = process.env.RECIEVER_ADDRESS
    const batchNFTs = await hre.ethers.getContractAt("BatchNFTs", contractAddress);

    const mintTokens = await batchNFTs.mint(recieverAddress, 3, { value: ethers.utils.parseEther("0.03") });
    console.log(`Transaction Hash: https://mumbai.polygonscan.com/tx/${mintTokens.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
