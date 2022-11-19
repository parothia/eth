const assert = require("assert");
const ganache = require("ganache");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;
beforeEach(async () => {
  //Get list of all unlocked accounts from ganache
  console.log("1");
  accounts = await web3.eth.getAccounts();
  //use one account to deploy the contract
  console.log("2");
  inbox = await new web3.eth.Contract(JSON.parse(interface));
  inbox = inbox.deploy({
    data: bytecode,
    arguements: ["Parothia"],
  });
  // .send({ from: accounts[0], gas: "100000" });
});

describe("Inbox", () => {
  console.log("3");
  it("deploys a contract", () => {
    console.log(inbox);
  });
});
