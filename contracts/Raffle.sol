//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

error Raffle_NotEnoughETHEntered();

contract Raffle {
    /*State Variables */
    uint256 private immutable i_entranceFee;
    address payable[] private s_players;

    /* Events */
    event RaffleEnter(address indexed player);

    constructor(uint256 entranceFee) {
        i_entranceFee = entranceFee;
    }

    function enterRaffle() public payable {
        if (msg.value < i_entranceFee) revert Raffle_NotEnoughETHEntered();
        s_players.push(payable(msg.sender));
        emit RaffleEnter(msg.sender);
    }

    function pickRandomWinner() public {}

    function getEntranceFee() public view returns (uint256) {
        return i_entranceFee;
    }

    function getPlayer(uint256 index) public view returns (address) {
        return s_players[index];
    }
}
//Enter the lottery
//Pick a random winner
//Winner to be selected every x minutes -> completely automated

//Chainlink Oracle -> Randomness, Automated Execution(CHainlink keepers)
