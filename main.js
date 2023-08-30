// Import the web3.js library
const Web3 = require('web3');

// Connect to an Ethereum node using Infura
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Global variable to store Ethereum accounts
let accounts = [];

// Fetch and populate user accounts
async function getAccounts() {
  try {
    accounts = await web3.eth.getAccounts();
  } catch (error) {
    console.error('Error fetching accounts:', error);
  }
}

// Fetch available Ethereum networks
async function fetchAvailableNetworks() {
  try {
    const networkList = await web3.eth.net.getNetworkType();
    return networkList;
  } catch (error) {
    console.error('Error fetching available networks:', error);
    return [];
  }
}

// Add a chain (send ETH) to the user's wallet
async function addChainToWallet(selectedChain) {
  try {
    const result = await web3.eth.sendTransaction({
      from: accounts[0],
      to: selectedChain,
      value: web3.utils.toWei('0.1', 'ether'),
    });

    console.log('Transaction result:', result);
  } catch (error) {
    console.error('Error adding chain to wallet:', error);
  }
}

// Initialize the application
async function initApp() {
  await getAccounts();
  const availableNetworks = await fetchAvailableNetworks();

  console.log('Available networks:', availableNetworks);

  // Add your UI population and event handling code here
}

// Call the initApp function to start the application
initApp();
