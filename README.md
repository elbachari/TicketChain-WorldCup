# ⚽ TicketChain: FIFA World Cup 2026 Decentralized Ticketing
<img width="1658" height="1262" alt="image (8)" src="https://github.com/user-attachments/assets/70078f7f-30e4-481c-b5f7-0b119e13356f" />

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
## 🛒 Parcours Utilisateur (User Journey)

Pour acheter un billet sur **TicketChain**, le client suit un processus sécurisé et décentralisé en trois étapes :

1. **Connexion du Wallet :** L'utilisateur accède au site et connecte son portefeuille **MetaMask** au réseau **Sepolia**. Cela sert d'authentification sans avoir besoin de créer un compte classique.
   <img width="2216" height="1290" alt="image (9)" src="https://github.com/user-attachments/assets/7e38abf8-50b0-4a62-b757-73e80f994563" />

3. **Achat du Billet :** Le client sélectionne son billet et clique sur "Buy Ticket". Une transaction est générée via **Ethers.js**, demandant au client de confirmer le paiement en ETH sur son interface MetaMask.
   

5. **Validation Blockchain :** Une fois la transaction validée sur la blockchain, MetaMask affiche une notification de réussite, et le billet est instantanément lié à l'adresse publique du client (visible sur Etherscan).
<img width="543" height="652" alt="image (10)" src="https://github.com/user-attachments/assets/53624c30-38bc-4738-831b-5bafe9f6e687" />

   
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
