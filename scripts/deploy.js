const hre = require("hardhat");

async function main() {
  const latestBlock = await hre.ethers.provider.getBlock("latest");

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy();

  await myToken.deployed(latestBlock.timestamp);

  console.log(
    `Deploy ERC721A contract and schedule mint to open on block ${latestBlock.timestamp}`,
    `Deployed to https://mumbai.polygonscan.com/address/${myToken.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
