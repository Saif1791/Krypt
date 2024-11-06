Krypt DApp

This is a decentralized web application (DApp) that enables users to transfer Ethereum from one account to another across the globe. Built using Solidity for smart contracts, React and Tailwind for the frontend, and MetaMask for wallet integration, this app allows seamless, secure Ethereum transfers on the blockchain.

Features

Ethereum Transfers: Send Ethereum from one account to another securely and instantly.
Smart Contract-Powered: The app uses a Solidity smart contract to handle all transfers, ensuring transparency and trust.
MetaMask Integration: Easily connect your Ethereum wallet to the app with MetaMask.
Real-Time Blockchain Updates: Display transaction confirmations and balances in real-time.
Responsive UI: Tailwind CSS provides a clean, responsive UI design.
🛠️ Technologies Used
Solidity: Smart contract development
React: Frontend library
Tailwind CSS: UI styling framework
MetaMask: Wallet and authentication
Ethers.js: Ethereum interaction library
Alchemy/Infura: For blockchain access

Installation
Clone the Repository:

```git clone https://github.com/yourusername/krypt.git
cd krypt```

Install Dependencies:

```cd client
npm i```

Compile and Deploy the Smart Contract:

Use Hardhat or Truffle to deploy the Solidity contract to your preferred network.
Update the deployed contract address in the React app.

Run the Application:

```npm run dev```

Usage

Open the app in your browser.
Connect your MetaMask wallet.
Enter the recipient's Ethereum address and the amount to transfer.
Confirm the transaction in MetaMask.

Smart Contract
The Solidity smart contract is located in the /contracts folder.
Use Hardhat to compile, test, and deploy the contract.

⚠️ Disclaimer
This app is intended for educational purposes. Use on test networks before deploying on the mainnet.
