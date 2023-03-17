// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import { console } from "hardhat/console.sol";

contract MyToken is ERC721, Ownable {
    string public helloMessage;
    ERC721 private token;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor(string memory _helloMessage) ERC721("MyToken", "MTK") {
        helloMessage = _helloMessage;
        console.log("Deploying a MyToken with greeting:", helloMessage);
    }

    function safeMint(address    to) public onlyOwner {
           uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function transferTest(uint256 tokenId, address to) public {
        require(token.ownerOf(tokenId) == msg.sender, "You are not the owner of this token");
           safeTransferFrom(msg.sender, to, tokenId);
    }



    function transferFrom(address from, address to, uint256 tokenId) public override {
        //        require(_isApprovedOrOwner(msg.sender, tokenId), "MyToken: transfer caller is not owner nor approved");
        _transfer(from, to, tokenId);
    }



    function _transfer(address from, address to, uint256 tokenId) internal override {
        require(ownerOf(tokenId) == from, "MyToken: transfer of token that is not own");
        require(to != address(0), "MyToken: transfer to the zero address");
        //        _approve(address(0), tokenId);
        _transferOwnership(to);
        //        emit Transfer(from, to, tokenId);
    }

    function hello() public view returns (string memory) {
        return helloMessage;
    }

    function setHelloMessage(string memory _helloMessage) public {
        console.log("Changing hello message from '%s' to '%s'", helloMessage, _helloMessage);
        helloMessage = _helloMessage;
    }
}
