# wallet-add-chain

This example demonstrates how to interact with the Ethereum blockchain using the web3.js library. It covers basic functionalities such as fetching accounts, available networks, and sending Ether to another address.

## Getting Started

**1. Clone this repository to your local machine:**

```git clone https://github.com/syt4sh1/wallet-add-chain.git```

**2. Navigate to the project directory:**

```cd ethereum-wallet-integration```

**3. Install dependencies (web3.js):**

```npm install web3```

Open the ``main.js`` file in a text editor and replace ``YOUR_INFURA_PROJECT_ID`` with your actual Infura project ID.

Save the changes and close the text editor.

## Usage
**4. Run the script using Node.js:**

```node main.js```

The script will connect to the Ethereum mainnet using the provided Infura project ID.
It will fetch your Ethereum accounts and display available networks.
The script includes a function to simulate sending Ether to another address. Please make sure to modify this part for your specific use case.

## Notes
This is a simplified example for educational purposes. In a real-world application, you would need to implement better error handling, user interface, and proper security measures.
The `web3.js` library is commonly used for Ethereum interaction, but other blockchains require different libraries and approaches.
