pragma solidity ^0.4.26;

contract Inbox {
    string public message;

    constructor(string initialMesssage) public {
        message = initialMesssage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
