# Hardhat boilerplate 721

This project is a boilerplate for creating NFTs on Polygon (Matic) network.

## Getting Started

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
