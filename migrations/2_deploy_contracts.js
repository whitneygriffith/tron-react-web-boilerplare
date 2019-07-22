var Ecommerce = artifacts.require("./Ecommerce.sol");
var Message = artifacts.require("./Message.sol");

module.exports = function(deployer) {
 deployer.deploy(Ecommerce);
 deployer.deploy(Message);
};
