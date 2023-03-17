import { ethers } from "hardhat";

async function main() {
  const latestBlock = await ethers.provider.getBlock("latest");

  const MyTokenFactory = await ethers.getContractFactory("MyToken");
  const myToken = await MyTokenFactory.deploy("Hello world");

  await myToken.deployed();

  console.log(
    `Deploy ERC721 contract and schedule mint to open on block ${latestBlock.timestamp}`,
    `Deployed to https://mumbai.polygonscan.com/address/${myToken.address}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
