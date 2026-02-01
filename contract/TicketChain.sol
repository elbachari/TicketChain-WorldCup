// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TicketChain {

    address public organizer;
    uint public ticketPrice = 0.0005 ether;
    uint public ticketCount;

    mapping(uint => address) public ticketOwner;

    constructor() {
        organizer = msg.sender;
    }

    function mintTicket() public {
        require(msg.sender == organizer, "Only organizer can mint");
        ticketCount++;
        ticketOwner[ticketCount] = organizer;
    }

    function buyTicket(uint ticketId) public payable {
        require(msg.value == ticketPrice, "Incorrect price");
        require(ticketOwner[ticketId] == organizer, "Ticket not available");

        ticketOwner[ticketId] = msg.sender;

        (bool success, ) = organizer.call{value: msg.value}("");
        require(success, "ETH transfer failed");
    }

    function verifyTicket(uint ticketId) public view returns (address) {
        return ticketOwner[ticketId];
    }
}