const abi = [
  {
    inputs: [
      {
        internalType: 'contract ChiToken',
        name: '_chiToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'origin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sendToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sendAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'destination',
        type: 'address',
      },
    ],
    name: 'LogOneWay',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'origin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sendToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sendAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'destination',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'receiveToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'receiveAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'LogTwoWay',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_chiAmount',
        type: 'uint256',
      },
    ],
    name: 'action',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'chiToken',
    outputs: [
      {
        internalType: 'contract ChiToken',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_chiAmount',
        type: 'uint256',
      },
    ],
    name: 'getActionData',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_actionData',
        type: 'bytes',
      },
      {
        internalType: 'enum DataFlow',
        name: '',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'termsOk',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'thisActionAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export default abi;
