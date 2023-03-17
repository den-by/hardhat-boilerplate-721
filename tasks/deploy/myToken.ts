import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { task } from "hardhat/config";

import type { TaskArguments } from "hardhat/types";

import type { MyToken } from "../../types/contracts/MyToken";
import type { MyToken__factory } from "../../types/factories/contracts/MyToken__factory";

task("deploy:MyToken")
  .addParam("helloMessage", "Say hello, be nice")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const signers: SignerWithAddress[] = await ethers.getSigners();
    const myTokenFactory: MyToken__factory = <MyToken__factory>await ethers.getContractFactory("MyToken");
    const myToken: MyToken = <MyToken>await myTokenFactory.connect(signers[0]).deploy(taskArguments.helloMessage);
    await myToken.deployed();
    const latestBlock = await ethers.provider.getBlock("latest");

    console.log("MyToken deployed to: ", myToken.address);
    console.log(
      `Deploy ERC721 contract and schedule mint to open on block ${latestBlock.timestamp}`,
      `https://mumbai.polygonscan.com/address/${myToken.address}`,
    );
  });
