import web3 from './web3';

const address = '0xaa888986462d64c3570790d8a8008034d23cc45d';

const abi = [
    {
     "constant": false,
     "inputs": [
      {
       "name": "x",
       "type": "string"
      }
     ],
     "name": "setHash",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "constant": true,
     "inputs": [],
     "name": "ipfsHash",
     "outputs": [
      {
       "name": "",
       "type": "string"
      }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
    },
    {
     "constant": true,
     "inputs": [],
     "name": "getMessage",
     "outputs": [
      {
       "name": "x",
       "type": "string"
      }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
    }
];

   export default new web3.eth.Contract(abi, address);