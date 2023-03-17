import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { MyToken } from "../../types/contracts/MyToken";
import type { MyToken__factory } from "../../types/factories/contracts/MyToken__factory";

export async function deployMyTokenFixture(): Promise<{ myToken: MyToken }> {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const admin: SignerWithAddress = signers[0];

  const greeting: string = "Hello, world!";
  const myTokenFactory: MyToken__factory = <MyToken__factory>await ethers.getContractFactory("MyToken");
  const myToken: MyToken = <MyToken>await myTokenFactory.connect(admin).deploy(greeting);
  await myToken.deployed();

  return { myToken: myToken };
}
