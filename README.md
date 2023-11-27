# Hardhat boilerplate 721

## Overview
This boilerplate is specifically designed for developers aiming to create and manage Non-Fungible Tokens (NFTs) on the Polygon (Matic) network. It provides a comprehensive setup for deploying and interacting with NFT smart contracts.

## Getting Started

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) and npm installed on your system.

### Clone Project

Clone the project from GitHub:
```bash
git clone https://github.com/den-by/hardhat-boilerplate-721
```

### Add Environment Variables

Copy  `.env.tamplate` into `.env` file and add your environment variables:

### Install Dependencies

Npm should be used to install project directories:

```bash
npm i
```

### Compile Contracts

To compile the set of smart contracts, run the following command:

```bash
npx hardhat compile
```

### Deploy Contract

To deploy the BatchNFTs contract to Mumbai testnet, run the following command:

```bash
npx hardhat run --network mumbai scripts/deploy.js
```

> As configured in `hardhat.config.js` and `deploy.js`.


### Minting NFTs

To mint NFTs, run the following command:

```bash
npx hardhat run --network mumbai scripts/mint.js
```
