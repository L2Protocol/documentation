# System Contracts

The L2 Protocol chain ships with a set of **system contracts** deployed at fixed, predefined addresses in the genesis block. They implement staking, validation, rewards, slashing, and governance directly at the protocol level.

Because they live at well-known addresses, tools and users can always find them at the same place on every L2 Protocol network.

## Overview

| Contract | Address | Purpose | Governable |
| --- | --- | --- | --- |
| [ValidatorSet](#validatorset) | [`0x0000000000000000000000000000000000001000`](https://l2pscan.com/address/0x0000000000000000000000000000000000001000) | Active validator set & block production | Yes |
| [SlashIndicator](#slashindicator) | [`0x0000000000000000000000000000000000001001`](https://l2pscan.com/address/0x0000000000000000000000000000000000001001) | Tracks misbehaviour and triggers slashing | Yes |
| [SystemReward](#systemreward) | [`0x0000000000000000000000000000000000001002`](https://l2pscan.com/address/0x0000000000000000000000000000000000001002) | Holds and distributes system rewards | Yes |
| [GovHub](#govhub) | [`0x0000000000000000000000000000000000001007`](https://l2pscan.com/address/0x0000000000000000000000000000000000001007) | Governance execution hub / router | No |
| [StakeHub](#stakehub) | [`0x0000000000000000000000000000000000002002`](https://l2pscan.com/address/0x0000000000000000000000000000000000002002) | Staking, delegation and slashing settings | Yes |
| [StakeCredit](#stakecredit) | [`0x0000000000000000000000000000000000002003`](https://l2pscan.com/address/0x0000000000000000000000000000000000002003) | Per-validator delegation share token | No |
| [Governor](#governor) | [`0x0000000000000000000000000000000000002004`](https://l2pscan.com/address/0x0000000000000000000000000000000000002004) | On-chain proposals and voting | Yes |
| [GovToken](#govtoken) | [`0x0000000000000000000000000000000000002005`](https://l2pscan.com/address/0x0000000000000000000000000000000000002005) | Governance voting token | No |
| [Timelock](#timelock) | [`0x0000000000000000000000000000000000002006`](https://l2pscan.com/address/0x0000000000000000000000000000000000002006) | Delay before accepted proposals execute | Yes |
| [BLS Precompile](#bls-precompile) | [`0x0000000000000000000000000000000000000066`](https://l2pscan.com/address/0x0000000000000000000000000000000000000066) | BLS signature verification for fast finality | No |

> **Governable** means the contract exposes settings that can be changed through [governance](../governance/README.md) parameter-change proposals. See [Changing parameters through governance](#changing-parameters-through-governance).

## ValidatorSet

**Address:** [`0x0000000000000000000000000000000000001000`](https://l2pscan.com/address/0x0000000000000000000000000000000000001000)

Maintains the active validator set and drives block production. It collects the transaction fees of each block, distributes them (burning a share, sending a share to the SystemReward contract), and updates the validator set at epoch boundaries. Parameters such as the number of cabinet validators, block-fee split ratios, and token emission are configured here.

## SlashIndicator

**Address:** [`0x0000000000000000000000000000000000001001`](https://l2pscan.com/address/0x0000000000000000000000000000000000001001)

Monitors validator behaviour. It records missed blocks (downtime) and malicious double-sign votes, and triggers the corresponding penalties: jailing for downtime and slashing for felonies. Thresholds like the misdemeanor/felony limits and the slash reward ratio are set here.

## SystemReward

**Address:** [`0x0000000000000000000000000000000000001002`](https://l2pscan.com/address/0x0000000000000000000000000000000000001002)

Acts as the treasury for system-level rewards, receiving a share of block fees and paying out to authorised operators. Governance can add or remove the operator addresses that are allowed to draw from it.

## GovHub

**Address:** [`0x0000000000000000000000000000000000001007`](https://l2pscan.com/address/0x0000000000000000000000000000000000001007)

The single, trusted entry point for executing governance decisions. When an accepted proposal is executed, the Timelock calls GovHub, which validates and forwards the change to the target system contract. For safety, the Governor only allows execution through GovHub. This is why parameter-change proposals are routed through it. GovHub is not itself a tunable contract; it is the router.

## StakeHub

**Address:** [`0x0000000000000000000000000000000000002002`](https://l2pscan.com/address/0x0000000000000000000000000000000000002002)

The central hub for staking. It handles validator registration, self-delegation, delegation and undelegation, redelegation, reward distribution, and the stake-based slashing settings (downtime and felony slash amounts, jail times, unbonding period, minimum delegations, and the maximum number of elected validators).

## StakeCredit

**Address:** [`0x0000000000000000000000000000000000002003`](https://l2pscan.com/address/0x0000000000000000000000000000000000002003)

Represents a delegator's stake in a specific validator as a share token (similar to an ERC-20 liquidity share). Each validator has its own StakeCredit pool; when you delegate, you receive credit shares whose value grows as the validator earns rewards. It is managed by StakeHub rather than configured directly.

## Governor

**Address:** [`0x0000000000000000000000000000000000002004`](https://l2pscan.com/address/0x0000000000000000000000000000000000002004)

The on-chain governor. It manages the full proposal lifecycle (creation, voting, queuing, and execution through the Timelock) and enforces that proposals can only execute against the whitelisted GovHub target. Voting rules such as the voting delay, voting period, proposal threshold, and quorum are configured here. See the [Governance documentation](../governance/README.md).

## GovToken

**Address:** [`0x0000000000000000000000000000000000002005`](https://l2pscan.com/address/0x0000000000000000000000000000000000002005)

The governance voting token (GovL2P). It represents voting power derived from staked L2P and is the token the Governor counts when tallying votes. Your balance (plus any votes delegated to you) at the moment a proposal's voting starts determines your weight on that proposal.

## Timelock

**Address:** [`0x0000000000000000000000000000000000002006`](https://l2pscan.com/address/0x0000000000000000000000000000000000002006)

A timelock controller that enforces a mandatory delay between queuing an accepted proposal and executing it. This delay gives the community time to react before a change goes live. When the delay has passed, the Timelock performs the actual execution by calling GovHub. Its minimum delay is itself a governable parameter.

## BLS Precompile

**Address:** [`0x0000000000000000000000000000000000000066`](https://l2pscan.com/address/0x0000000000000000000000000000000000000066)

A native precompiled contract used to verify BLS signatures efficiently. It supports the fast-finality mechanism, where validators aggregate BLS votes to finalize blocks quickly. As a precompile it is part of the chain client and is not upgraded or configured through governance.

## Changing parameters through governance

The contracts marked **Governable** expose an `updateParam` function that can only be called through governance. You do not call these functions directly. Instead, you create a [parameter-change proposal](../governance/governance-guide.md#parameter-change-executable) in the governance interface, which builds the change and routes it through GovHub. Once the proposal is accepted, queued, and the timelock passes, the change is applied.

## Resources

- [Governance overview](../governance/README.md) - how proposals and voting work
- [Governance Guide](../governance/governance-guide.md) - change a parameter step by step
- [Validators](../validators/README.md) - how staking and validation use these contracts
