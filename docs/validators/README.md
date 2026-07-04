# Validators

Validators are the backbone of the L2 Protocol network. They are responsible for processing transactions, producing blocks, and maintaining the security and integrity of the blockchain. This guide explains what validators do, how they work, and how you can become one.

## What is a Validator?

A validator is a network participant that runs specialized node software to validate transactions and create new blocks on the L2 Protocol blockchain. Validators stake L2P tokens as collateral, demonstrating their commitment to honest participation. In return for their service, validators earn rewards from block production and transaction fees.

Think of validators as the bookkeepers of the blockchain: they verify that all transactions follow the rules, package them into blocks, and maintain consensus about the state of the network.

## How Validators Work

### Parlia Consensus

L2 Protocol uses the Parlia consensus mechanism, a Proof of Staked Authority (PoSA) system that combines elements of Proof of Authority and Proof of Stake. Here's how it works:

**Validator Selection**: Active validators are selected based on stake ranking. Only validators with the highest total stake (self-delegation plus delegated tokens) participate in block production.

**Block Production**: Active validators take turns producing blocks in a round-robin fashion. Each validator has a designated time slot approximately every 3 seconds to propose a block.

**In-Turn vs Out-of-Turn**: 
- **In-turn**: The validator whose turn it is has priority to produce the block
- **Out-of-turn**: If the in-turn validator misses their slot, another validator can produce the block with lower difficulty

**Epochs**: The network operates in epochs. An epoch consists of 200 blocks (approximately 10 minutes). At the end of each epoch, validator rewards are distributed and validator rankings may be updated.

### Fast Finality

In addition to the Parlia consensus, L2 Protocol implements a fast finality mechanism using BLS signatures:

**Vote Aggregation**: Validators vote on block finality using their BLS keys
**Quick Confirmation**: Once enough validators (2/3+ of total stake) vote for a block, it achieves finality
**Security**: Finalized blocks cannot be reverted, providing strong transaction guarantees

This dual-layer approach ensures both rapid block production (~3 seconds) and quick transaction finality.

## Validator Requirements

### Technical Requirements

To run a validator node, you need:

- **Server Infrastructure**: 
  - 8+ CPU cores (recommended)
  - 32GB+ RAM
  - 1TB+ SSD storage (NVMe recommended)
  - Stable internet connection with at least 100 Mbps bandwidth
  - Static IP address recommended

- **Operating System**: 
  - Linux (Ubuntu 20.04/22.04 LTS recommended)
  - Docker support (optional but recommended)

- **Uptime**: 
  - 99.9%+ availability required
  - Redundant infrastructure highly recommended
  - Downtime results in missed blocks and potential jailing

### Financial Requirements

- **Minimum Self-Delegation**: 2,000 L2P tokens
- **Creation Lock**: 1 L2P token permanently locked during validator creation
- **Total Required**: 2,001 L2P tokens minimum
- **Competitive Stake**: Higher total stake (including delegations) increases chances of becoming active

### Knowledge Requirements

- Linux system administration experience
- Understanding of blockchain node operations
- Ability to monitor and troubleshoot node issues
- Familiarity with geth and blockchain synchronization
- Ability to apply updates and upgrades promptly

## Validator Responsibilities

### Block Production

Active validators must:
- Produce blocks during their assigned time slots
- Include valid transactions from the mempool
- Follow consensus rules strictly
- Maintain synchronized blockchain state
- Participate in fast finality voting

Missing blocks results in lost rewards and can lead to jailing.

### Uptime and Performance

Validators must:
- Maintain near-constant availability (99.9%+)
- Respond quickly during their block production slots
- Keep their node synchronized with the network
- Monitor for consensus issues or forks
- Have backup procedures in place

### Network Upgrades

Validators must:
- Monitor official announcement channels
- Test upgrades on testnet first
- Apply mainnet upgrades before hard fork deadlines
- Participate in governance decisions
- Coordinate with other validators during major updates

Failure to upgrade before a hard fork can result in your node being on the wrong chain.

## Active Validator Selection

L2 Protocol limits the number of active validators to maintain network efficiency:

**Active Set Size**: The network maintains a fixed number of active validators (configured in the system contracts, typically 21 for mainnet and 8-9 for testnets)

**Selection Criteria**: Validators are ranked by total staked amount (self-delegation + delegated tokens). The top N validators become active.

**Rotation**: Validator rankings are updated each epoch. If your total stake drops below the active threshold, you'll be moved to the candidate set.

**Candidate Validators**: Validators outside the active set remain registered but don't produce blocks or earn rewards. They can become active by increasing their stake.

## Validator Economics

### Revenue Streams

Active validators earn rewards from:

**Block Rewards**: Each produced block includes a fixed reward in L2P tokens

**Transaction Fees**: Validators keep a portion of transaction fees from blocks they produce

**System Rewards**: Additional rewards distributed during epoch transitions

### Delegation and Commissions

Validators can accept delegations from token holders:

**Commission Rate**: The percentage of rewards you keep from delegated stake (e.g., 5% commission means you keep 5% of rewards from delegations)

**Commission Parameters**:
- **Rate**: Current commission percentage
- **Max Rate**: Maximum commission you can ever charge
- **Max Change Rate**: Maximum change allowed per epoch (prevents sudden increases)

**Example**: If you have 10,000 L2P delegated and earn 100 L2P in rewards with 10% commission, you keep 10 L2P and delegators share 90 L2P.

### Costs

Operating a validator involves:

**Infrastructure**: $100-300/month for reliable cloud hosting
**Bandwidth**: Continuous data synchronization
**Time**: Initial setup, monitoring, updates
**Opportunity Cost**: Locked stake cannot be used elsewhere

## Slashing and Jailing

L2 Protocol enforces validator behavior through penalties:

### Slashing Events

**Double Signing**: 
- **Offense**: Signing two different blocks at the same height
- **Penalty**: Significant stake slashing (potentially thousands of L2P)
- **Result**: Immediate removal from validator set

**Continuous Downtime**:
- **Offense**: Missing a threshold number of blocks in a sliding window
- **Penalty**: Jailing (temporary removal from active set)
- **Result**: No rewards until unjailed

### Jailing

When a validator is jailed:
1. They're removed from the active validator set
2. They stop earning rewards
3. They must manually unjail themselves through the system contract
4. They may need to wait for a cooldown period
5. They must resolve the underlying issue before unjailing

**Common Causes**:
- Extended node downtime
- Network connectivity issues
- Synchronization problems
- Missed block production slots

### Avoiding Penalties

To avoid slashing and jailing:
- Never run two validator nodes with the same consensus keys simultaneously
- Maintain high uptime with monitoring and alerts
- Have backup infrastructure ready
- Keep your node properly synchronized
- Respond quickly to any issues

## Delegation System

Users who don't operate validators can still participate:

**For Token Holders**:
- Choose a validator based on commission, uptime, and reputation
- Delegate L2P tokens through the staking interface
- Earn rewards automatically each epoch
- Can redelegate or undelegate with unbonding period

**For Validators**:
- Higher delegations increase your total stake
- Improved ranking leads to active set inclusion
- Build reputation to attract more delegators
- Balance commission rates to remain competitive

## Validator Lifecycle

### 1. Creation

- Acquire minimum 2,001 L2P tokens
- Generate consensus address using geth
- Generate vote address and BLS proof using geth
- Register validator through staking interface
- Set commission parameters (cannot be changed to exceed initial limits)
- Self-delegate minimum stake

### 2. Candidate Period

- Validator is created but not yet active
- Need to accumulate sufficient total stake to enter top N
- Can accept delegations from community
- Build reputation and visibility

### 3. Activation

- Total stake enters top N validators
- Begin producing blocks in rotation
- Start earning block rewards and fees
- Participate in fast finality voting

### 4. Active Operation

- Produce blocks during assigned slots
- Maintain high uptime and performance
- Monitor node health continuously
- Apply updates and upgrades promptly
- Manage delegator relationships

### 5. Potential Jailing

- If issues occur, validator may be jailed
- Must diagnose and fix underlying problems
- Unjail through system contract interaction
- Resume operation once cleared

### 6. Exit (Optional)

- Stop accepting new delegations
- Wait for existing delegators to undelegate
- Withdraw self-delegated stake after unbonding period (typically 7 days)
- Decommission infrastructure

## System Contracts

L2 Protocol uses system contracts to manage staking and validation:

**StakeHub Contract** ([`0x0000000000000000000000000000000000002002`](https://l2pscan.com/address/0x0000000000000000000000000000000000002002)):
- Manages validator registration
- Handles staking and delegation
- Distributes rewards
- Enforces slashing

**SlashIndicator Contract**:
- Tracks validator misbehavior
- Implements jailing logic
- Manages unjailing procedures

These contracts are deployed at predefined addresses and handle all stake-related operations.

## Epoch System

Understanding epochs is crucial for validators:

**Epoch Length**: 200 blocks (~10 minutes at 3-second block time)

**Epoch Transitions**:
- Reward distribution occurs
- Validator rankings may update
- Commission changes take effect
- Undelegation cooldowns progress

**Breathe Block**: The last block of an epoch (every 200th block) where special system contract calls occur for reward distribution and state updates.

## Validator Best Practices

### Infrastructure

- Use dedicated bare metal servers or high-performance VPS
- Implement hot-standby backup node (but NEVER run both simultaneously with same keys)
- Use SSD/NVMe storage for fast synchronization
- Ensure redundant network connectivity
- Consider geographic diversity for resilience

### Security

- Never share or expose validator private keys
- Store keys in encrypted formats
- Use separate accounts for validator operations
- Implement firewall rules restricting RPC access
- Enable fail2ban or similar intrusion prevention
- Regular security audits and updates

### Monitoring

- Set up alerts for missed blocks
- Monitor node synchronization status
- Track validator ranking and stake changes
- Watch for jailing events
- Monitor system resource usage (CPU, RAM, disk, network)
- Join validator communication channels

### Operations

- Document your procedures
- Test all changes on testnet first
- Have rollback procedures ready
- Maintain update schedule aligned with network
- Keep detailed logs of all operations
- Have 24/7 response capability

## Becoming a Validator

Ready to run a validator? Follow these steps:

1. **Prepare Infrastructure**: Set up reliable, high-performance server(s)
2. **Acquire Tokens**: Obtain at least 2,001 L2P tokens
3. **Install Node Software**: Deploy and sync a full L2 Protocol node
4. **Generate Keys**: Create consensus address, vote address, and BLS proof using geth
5. **Register Validator**: Submit information through the staking interface
6. **Monitor Ranking**: Track your position relative to the active set
7. **Attract Delegations**: Build reputation to increase total stake
8. **Enter Active Set**: Once in top N, begin producing blocks

For detailed step-by-step instructions, see our [Validator Creation Guide](./validator-creation-guide.md).

## Frequently Asked Questions

**How many active validators are there?**

The network maintains a fixed number of active validators (21 on mainnet, 8 on testnet). Only the top validators by total stake participate in block production.

**What if I'm not in the active set?**

You'll remain a candidate validator. You can still accept delegations and will become active if your stake rises into the top N.

**How often can I change commission?**

You can change commission once per epoch (approximately every 10 minutes), but the change is limited by your max change rate parameter.

**What causes jailing?**

Missing too many blocks in a row or within a sliding window will result in jailing. The exact threshold is defined in the SlashIndicator contract.

**Can I unjail myself?**

Yes, once you've resolved the issue causing downtime, you can call the unjail function in the system contract (may require a cooldown period).

**What happens during network upgrades?**

You must upgrade your node software before the hard fork block height. Validators on the wrong chain version will be unable to produce valid blocks.

**How long is the unbonding period?**

Typically 7 days. During this time, your stake remains locked and continues earning rewards if you're an active validator.

## Resources

- [Validator Creation Guide](./validator-creation-guide.md) - Complete setup instructions
- [Node Setup Guide](#) - Technical node deployment documentation
- [Staking Interface](#) - Create and manage your validator
- [Block Explorer](#) - Monitor blocks and validator performance
- [Validator Dashboard](#) - Track your validator statistics
- [System Contracts](#) - Contract addresses and ABIs
- [Validator Community](#) - Discord/Telegram for validator operators

---

*Questions about running a validator? Join our [Validator Community](#) for technical support and discussion.*