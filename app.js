const Web3 = require("web3");
const rpcURL = "HTTP://127.0.0.1:7545";
const web3 = new Web3(rpcURL);

const account1 = "0xf57264B2D40C9283d03A54af511EaBA2A1e04594";
const account2 = "0x8ED4747b136f6906A41301775AA126c258B4c7Dd";

web3.eth.sendTransaction(
  {
    from: account1,
    to: account2,
    value: web3.utils.toWei("1", "ether"),
  },
  (err, result) => {
    console.log(result);
  }
);

// console.log("connected");

// web3.eth.getBlockNumber().then(console.log);

// const address = "0xbccdCa3CB2544cfda8D19b246024bF2c11B873Fb";
// web3.eth.getBalance(address, (err, balance) =>
//   console.log(web3.utils.fromWei(balance, "ether"))
// );

// const abi = [
//   {
//     constant: false,
//     inputs: [
//       { name: "newSellPrice", type: "uint256" },
//       { name: "newBuyPrice", type: "uint256" },
//     ],
//     name: "setPrices",
//     outputs: [],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "name",
//     outputs: [{ name: "", type: "string" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { name: "_spender", type: "address" },
//       { name: "_value", type: "uint256" },
//     ],
//     name: "approve",
//     outputs: [{ name: "success", type: "bool" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "totalSupply",
//     outputs: [{ name: "", type: "uint256" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { name: "_from", type: "address" },
//       { name: "_to", type: "address" },
//       { name: "_value", type: "uint256" },
//     ],
//     name: "transferFrom",
//     outputs: [{ name: "success", type: "bool" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "decimals",
//     outputs: [{ name: "", type: "uint8" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "sellPrice",
//     outputs: [{ name: "", type: "uint256" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "standard",
//     outputs: [{ name: "", type: "string" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [{ name: "", type: "address" }],
//     name: "balanceOf",
//     outputs: [{ name: "", type: "uint256" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { name: "target", type: "address" },
//       { name: "mintedAmount", type: "uint256" },
//     ],
//     name: "mintToken",
//     outputs: [],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "buyPrice",
//     outputs: [{ name: "", type: "uint256" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "owner",
//     outputs: [{ name: "", type: "address" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "symbol",
//     outputs: [{ name: "", type: "string" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [],
//     name: "buy",
//     outputs: [],
//     payable: true,
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { name: "_to", type: "address" },
//       { name: "_value", type: "uint256" },
//     ],
//     name: "transfer",
//     outputs: [],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [{ name: "", type: "address" }],
//     name: "frozenAccount",
//     outputs: [{ name: "", type: "bool" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { name: "_spender", type: "address" },
//       { name: "_value", type: "uint256" },
//       { name: "_extraData", type: "bytes" },
//     ],
//     name: "approveAndCall",
//     outputs: [{ name: "success", type: "bool" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       { name: "", type: "address" },
//       { name: "", type: "address" },
//     ],
//     name: "allowance",
//     outputs: [{ name: "", type: "uint256" }],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [{ name: "amount", type: "uint256" }],
//     name: "sell",
//     outputs: [],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { name: "target", type: "address" },
//       { name: "freeze", type: "bool" },
//     ],
//     name: "freezeAccount",
//     outputs: [],
//     payable: false,
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [{ name: "newOwner", type: "address" }],
//     name: "transferOwnership",
//     outputs: [],
//     payable: false,
//     type: "function",
//   },
//   {
//     inputs: [
//       { name: "initialSupply", type: "uint256" },
//       { name: "tokenName", type: "string" },
//       { name: "decimalUnits", type: "uint8" },
//       { name: "tokenSymbol", type: "string" },
//     ],
//     payable: false,
//     type: "constructor",
//   },
//   { payable: false, type: "fallback" },
//   {
//     anonymous: false,
//     inputs: [
//       { indexed: false, name: "target", type: "address" },
//       { indexed: false, name: "frozen", type: "bool" },
//     ],
//     name: "FrozenFunds",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       { indexed: true, name: "from", type: "address" },
//       { indexed: true, name: "to", type: "address" },
//       { indexed: false, name: "value", type: "uint256" },
//     ],
//     name: "Transfer",
//     type: "event",
//   },
// ];

// const address = "0x0bb217E40F8a5Cb79Adf04E1aAb60E5abd0dfC1e";

// const contract = new web3.eth.Contract(abi, address);

// console.log(contract);

// contract.methods.name().call((err, result) => {
//   console.log(result);
// });

// contract.methods.symbol().call((err, result) => {
//   console.log(result);
// });

// contract.methods.totalSupply().call((err, result) => {
//   console.log(result);
// });
