# &#x1F4DC; Ethereum Block Chain

Building a simple **Ethereum Contracts** and deploying it to a **Sepolia** test network using **Solidity** and **node js**.

### Prerequisite

1. Install **Metamask** as Google Chrome Extension and Create an account.
2. Request Ether by sharing your ethereum address in social media <br>(`https://faucet.sepolia.dev/)`

### Dependencies Used

| Name                      | Version       | Description                                                                                                              |
| ------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| solc                      | 0.4.26        | Programming language to write smart contracts                                                                            |
| ganache                   | 7.5.0         | Local Ethereum Test Network                                                                                              |
| mocha                     | 10.1.0         | JavaScript test framework                                                                                                |
| @truffle/hdwallet-provider | 2.1.2         | The **Truffle HDWallet provider** is a convenient and easy to configure network connection to ethereum through infura.io |
| web3                     | 1.8.1 | Ethereum JavaScript API which connects to the Generic JSON RPC spec.                                                     |
                                                     |

### Steps to Setup

**1. Clone the Application**

    git clone git@github.com:parothia/eth.git

**2. Intall dependencies/npm modules**
Go to the project directory and execute the following command from the terminal.

    npm install

**3. Test Contract using mocha**

    npm test

**4. Deploy the Contract in Rinkeby Test Network**

    node deploy.js

`

You can check your contract has been deployed on https://sepolia.etherscan.io with the transaction hash you get when your contract has been successfully deployed.