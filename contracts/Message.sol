pragma solidity >=0.4.22 <0.6.0;

contract Message {
    
    string public message;
    
    function set(string memory newMessage) public {
        message = newMessage;
    }

    function get() public view returns (string memory) {
        return message;
    }
    
}