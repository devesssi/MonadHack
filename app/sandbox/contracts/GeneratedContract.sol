pragma solidity ^0.8.20;

contract MyContract {
    string public message;

    constructor(string memory _message) {
        message = _message;
    }
}