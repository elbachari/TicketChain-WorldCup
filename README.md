# ⚽ TicketChain: FIFA World Cup 2026 Decentralized Ticketing

## 📌 Project Overview
TicketChain is a Web3 application designed to solve persistent issues in global sporting events such as ticket fraud, counterfeiting, and illegal resale. By leveraging Ethereum Smart Contracts, every ticket is a unique digital asset whose ownership is verifiable, transparent, and immutable.

This project was developed as part of the M2 Computer Science (RES) program at Sorbonne Université.

## 🚀 Key Features

Immutable Ownership: Once a ticket is purchased, the record is stored permanently on the Sepolia Testnet.


Organizer Minting: Only the authorized event organizer can create (mint) tickets, ensuring controlled issuance.


Secure Cryptocurrency Payments: Uses a buyTicket function to ensure tickets are only transferred upon receipt of the correct ETH amount.


Web3 Integration: A modern frontend that connects directly to the blockchain via MetaMask and Ethers.js.


Transparency: All transactions and ownership records can be audited publicly via Etherscan.

## 🛠️ Tech Stack

Smart Contract: Solidity (v0.8.20) 


Frontend: HTML5, CSS3, JavaScript 


Blockchain Library: Ethers.js 


Environment: Remix IDE, VS Code, MetaMask 


Network: Ethereum Sepolia Testnet 

## 📁 Repository Structure

/contract: Contains TicketChain.sol (the core logic).


/frontend: The user dashboard and Web3 connection logic.


/docs: Full technical project report.

# 🔧 How to Run Locally
Clone the repo:

Bash
git clone https://github.com/elbachari/TicketChain-WorldCup.git
Deploy the Contract:

Open contract/TicketChain.sol in Remix IDE.

Deploy to Injected Provider - MetaMask on the Sepolia Network.

Configure Frontend:

Update the contractAddress in your app.js with your deployed address.

Launch:

Open frontend/index.html in your browser to start buying tickets.
