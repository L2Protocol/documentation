# Adding L2 Protocol to MetaMask

This guide will help you add the L2 Protocol network to your MetaMask wallet, allowing you to interact with L2P dApps, send transactions, and manage your L2P tokens.

## Prerequisites

- MetaMask browser extension installed ([Download MetaMask](https://metamask.io/download/))
- MetaMask account created and secured

## Method 1: Automatic Addition (Recommended)

If you're connecting to a dApp on L2 Protocol, the site will typically prompt you to add the network automatically:

1. Visit any L2P dApp or the official L2 Protocol website, for example: (L2PScan)[https://l2pscan.com]
2. Click "Connect Wallet" or similar button
3. MetaMask will display a popup asking to "Allow this site to add a network"
4. Review the network details
5. Click "Approve" to add the network
6. Click "Switch network" to start using L2 Protocol

## Method 2: Manual Addition

If you prefer to add the network manually, follow these steps:

### Step 1: Open Network Settings

1. Open MetaMask extension in your browser
2. Click the network dropdown at the top (shows "Ethereum Mainnet" by default)
3. Click "Add network" at the bottom of the dropdown
4. Click "Add a network manually" at the bottom of the page

### Step 2: Enter Network Details

#### For Mainnet

Fill in the following information:

**Network Name**: `L2 Protocol Mainnet`

**RPC URL**: `https://rpc.l2protocol.com`

**Chain ID**: `12216`

**Currency Symbol**: `L2P`

**Block Explorer URL**: `https://l2pscan.com`

1. Click "Save" to add the network
2. MetaMask will automatically switch to the new network
3. You should see "L2 Protocol Mainnet" (or Testnet) in the network dropdown
4. Your L2P balance will display once you have tokens

## Verify Connection

To confirm you're connected to the correct network:

1. Check that the network name shows correctly in MetaMask
2. Visit the [Block Explorer](https://l2pscan.com)
3. Your address from MetaMask should work on the explorer
4. Try a small test transaction if possible

## Switching Between Networks

To switch between L2 Protocol and other networks:

1. Click the network dropdown at the top of MetaMask
2. Select "L2 Protocol Mainnet" (or any other network)
3. MetaMask will switch immediately

## Common Issues

### Wrong Chain ID Error

If you see "Chain ID mismatch" or similar errors:
- Double-check the Chain ID matches exactly
- Remove the network and re-add with correct details
- Clear browser cache and try again

### RPC Connection Failed

If MetaMask can't connect to the network:
- Verify the RPC URL is correct
- Check your internet connection
- Try an alternative RPC endpoint if available
- Contact support if the issue persists

### Tokens Not Showing

If your L2P tokens don't appear:
- Make sure you're on the correct network (Mainnet or Testnet)
- Wait a few moments for the balance to update
- Try refreshing MetaMask by locking and unlocking
- Check your address on the block explorer to verify the balance

## Adding Custom Tokens

To add other tokens on L2 Protocol to MetaMask:

1. Make sure you're connected to L2 Protocol network
2. Click "Import tokens" at the bottom of the assets list
3. Enter the token contract address
4. MetaMask will auto-fill the token symbol and decimals
5. Click "Add custom token"
6. Confirm by clicking "Import tokens"

## Mobile MetaMask

The process for mobile is similar:

1. Open MetaMask app
2. Tap the hamburger menu (☰) at top left
3. Tap "Settings"
4. Tap "Networks"
5. Tap "Add Network"
6. Enter the same network details as above
7. Tap "Add"
8. Switch to L2 Protocol from the network dropdown

## Security Reminders

- Always verify you're on the official L2 Protocol RPC before making transactions
- Never share your seed phrase or private keys
- Double-check contract addresses before interacting with tokens
- Be cautious of phishing sites that mimic L2 Protocol dApps
- Bookmark the official L2 Protocol website and block explorer

## Next Steps

Now that you've added L2 Protocol to MetaMask:

- [Get L2P tokens](./bridge-guide.md)
- [Explore the ecosystem](#)
- [Start using dApps](#)
- [Delegate to validators](./staking-guide.md)

## Additional Resources

- [MetaMask Support](https://support.metamask.io/)
- [L2 Protocol Block Explorer](https://explorer.l2protocol.com)
- [RPC Endpoints Documentation](#)
- [Troubleshooting Guide](#)

---

*Having trouble? Join our [Discord](#) or [Telegram](#) for community support.*