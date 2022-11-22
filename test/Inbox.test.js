const assert = require("assert");
const ganache = require("ganache");
const Web3 = require("web3");
const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlocks: 8,
};
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;
let initialString = "Parothia";
beforeEach(async () => {
  //Get list of all unlocked accounts from ganache
  accounts = await web3.eth.getAccounts();
  //use one account to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [initialString],
    })
    .send({ from: accounts[0], gas: 500000 });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
  });

  it("contract has default message", async () => {
    const message = await inbox.methods.message().call(); //simply calling a function to retrieve the data
    assert.equal(message, initialString);
  });

  it("message modified", async () => {
    await inbox.methods.setMessage("updated").send({ from: accounts[0] }); // sending a transaction to a funciton modify the data
    const message = await inbox.methods.message().call(); //simply calling a function to retrieve the data
    assert.equal(message, "updated");
  });
});
