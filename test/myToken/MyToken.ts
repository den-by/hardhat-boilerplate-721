import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { Signers } from "../types";
import { deployMyTokenFixture } from "./MyToken.fixture";
import { expect } from "chai";

export type InjectableContext = Readonly<{
  // myToken: any;
}>;

type Created = Awaited<ReturnType<typeof deployMyTokenFixture>>;

export type TestContext = Mocha.Context & InjectableContext & Created;

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];

    this.loadFixture = loadFixture;
  });

  describe("MyToken", function () {
    beforeEach(async function (this: TestContext) {
      const { myToken } = await this.loadFixture(deployMyTokenFixture);
      this.myToken = myToken;
    });

    it("should return the new greeting once it's changed", async function (this: TestContext) {
      expect(await this.myToken.connect(this.signers.admin).hello()).to.equal("Hello, world!");

      await this.myToken.setHelloMessage("Bonjour, le monde!");
      expect(await this.myToken.connect(this.signers.admin).hello()).to.equal("Bonjour, le monde!");
    });
  });
});
