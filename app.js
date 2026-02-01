// 1. Setup - Paste your info from Remix here!
// The "Where" - The unique location of your contract on Sepolia
const contractAddress = "0xe07414287C3aE382239D200aE2542E5678C18a3f"; 

// The "How" - The map of your functions
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ticketId",
				"type": "uint256"
			}
		],
		"name": "buyTicket",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintTicket",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "organizer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ticketCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ticketOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ticketPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ticketId",
				"type": "uint256"
			}
		],
		"name": "verifyTicket",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; 

let provider;
let signer;
let contract;

// 2. Connect MetaMask to the Website
async function connectWallet() {
    if (window.ethereum) { // Checks if MetaMask is installed
        try {
            // Initialize the Provider (the connection to the blockchain)
            provider = new ethers.providers.Web3Provider(window.ethereum);
            
            // Ask the user for permission to access their accounts
            await provider.send("eth_requestAccounts", []);
            
            // Get the Signer (the user who will pay for things)
            signer = provider.getSigner();
            
            // Create the Contract Object (The "Bridge")
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            
            const walletAddress = await signer.getAddress();
            document.getElementById('status').innerText = "Connected: " + walletAddress;
            
            // Show the ticket section and get the current count
            document.getElementById('ticketSection').style.display = "block";
            getTicketCount();
            
        } catch (error) {
            console.error(error);
            document.getElementById('status').innerText = "Connection failed.";
        }
    } else {
        alert("Please install MetaMask!");
    }
}

// 3. Read Data: Get the total number of tickets
async function getTicketCount() {
    const count = await contract.ticketCount();
    document.getElementById('count').innerText = count.toString();
}

// 4. Write Data: Buy a Ticket
async function buyTicket() {
    const ticketId = document.getElementById('ticketIdInput').value;
    
    try {
        document.getElementById('status').innerText = "Confirming in MetaMask...";
        
        // Call the buyTicket function from your Solidity code
        const tx = await contract.buyTicket(ticketId, {
            value: ethers.utils.parseEther("0.0005") // The price you set
        });

        document.getElementById('status').innerText = "Waiting for blockchain confirmation...";
        
        // Wait for the transaction to be "mined"
        await tx.wait();
        
        document.getElementById('status').innerText = "Success! You bought ticket #" + ticketId;
        getTicketCount(); // Refresh the count
    } catch (error) {
        console.error(error);
        document.getElementById('status').innerText = "Transaction failed.";
    }
}

// Assign functions to the buttons in your HTML
document.getElementById('connectBtn').onclick = connectWallet;
document.getElementById('buyBtn').onclick = buyTicket;