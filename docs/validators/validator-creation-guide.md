# Validator Creation Guide

This guide describes how to set up a new validator for the L2 Protocol network. Through the L2P staking interface, you can create and manage validators.
  
**Mainnet**: [https://validators.l2protocol.com](https://validators.l2protocol.com)

## Key Terms

**Operator Address**: The address used to create and modify validator information. Use this address to connect to the staking interface. This account must contain at least 2001 L2P tokens for creating validators and covering transaction fees.

**Consensus Address**: A unique address for the validator node, used by the consensus engine when mining new blocks. This must differ from the operator address. When migrating an existing validator, the old consensus address cannot be reused.

**Vote Address**: Used for fast finality voting processes. This address must also be new when migrating an existing validator.

**BLS Proof**: A cryptographic signature proving ownership of the vote address.

**Identity**: Optional field to link a new validator to an existing validator during migration. Useful for delegators to see that the same operator is running a new validator.

## Steps

### 1. Connect to the Interface

Connect to the staking interface using your Operator Address. You can use Trust Wallet, MetaMask, or WalletConnect for this. Ensure your account contains more than 2001 L2P tokens before proceeding.

### 2. Fill Out the Form

Open the interface and click the "Become a Validator" button (center-right) to begin.

#### Basic Information

Provide the following information:

- **Validator Name**: Choose a name of 3-9 alphanumeric characters, without special characters.
- **Website**: URL to a website with more information about your validator.
- **Description**: Brief description of your validator.

For better visibility, you can upload additional information to the L2P validator directory. Your avatar will then be displayed in the staking interface.

#### Addresses

The following addresses are required:

- **Consensus Address**: Unique address for the validator node
- **Vote Address**: Used for fast finality voting
- **BLS Proof**: Proves ownership of the vote address
- **Identity**: Optional, only required when migrating an existing validator

#### Generate Consensus Address

Download the geth binary from the official release page.

> **Note**: Download the correct version for your platform (e.g., geth_mac for MacOS).

Create a new account for mining:
```bash
geth account new --datadir ${DATA_DIR}
```

- `DATA_DIR`: Directory where your keystore files will be stored.

This command returns the public address (consensus address) and the path to your private key. **Make a backup of the key file!**

Example consensus address: `0x4b3FFeDb3470D441448BF18310cAd868Cf0F44B5`

Already have a mining account? Restore it with:
```bash
geth account import --datadir ${DATA_DIR}
```

> **Note**: When migrating an existing validator, you must create a new consensus address.

#### Generate Vote Address and BLS Proof

Create a new BLS account:
```bash
geth bls account new --datadir ${DATA_DIR}
```

Already have a voting key? Restore it with:
```bash
geth bls account import ${KEY_FILE} --datadir ${DATA_DIR}
```

View your vote address:
```bash
geth bls account list --datadir ${DATA_DIR}
```

Example address: `b5fe571aa1b39e33c2735a184885f737a59ba689177f297cba67da94bea5c23dc71fd4deefe2c0d2d21851eb11081f69`

Generate the BLS proof:
```bash
geth bls account generate-proof --chain-id ${CHAIN_ID} ${OPERATOR_ADDRESS} ${VOTE_ADDRESS}
```

- `CHAIN_ID`: [your mainnet chain ID] for mainnet, [your testnet chain ID] for testnet
- `OPERATOR_ADDRESS`: Address of your account, will become operator of the new validator
- `VOTE_ADDRESS`: Vote address from the previous step

Example proof: `0xaf762123d031984f5a7ae5d46b98208ca31293919570f51ae2f0a03069c5e8d6d47b775faba94d88dbbe591c51c537d718a743b9069e63b698ba1ae15d9f6bf7018684b0a860a46c812716117a59c364e841596c3f0a484ae40a1178130b76a5`

#### Commissions

- **Rate**: The commission percentage of the validator.
- **Max Rate**: Maximum possible commission percentage.
- **Max Change Rate**: Maximum change per epoch (1 day).

#### Self-delegation

- **Self Delegate Amount**: Number of tokens to delegate when creating the validator. Minimum 2001 - of which 2000 for the minimum self delegation and 1 extra that goes to a dead address.

### 3. Submit the Form

Click "Submit" to send the transaction after filling in all fields.

> **Important**: Creating a validator does not guarantee your node will become active. Selection is based on a ranking of the total number of staked tokens. Only the top N nodes are selected as active validators. This number N is determined by the "maxElectedValidators" parameter in the StakeHub contract ([`0x0000000000000000000000000000000000002002`](https://l2pscan.com/address/0x0000000000000000000000000000000000002002)).