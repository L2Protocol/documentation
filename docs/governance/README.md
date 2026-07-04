# Governance

Governance lets the L2 Protocol community steer the network. Through the governance interface you can review proposals, vote with your voting power, create new proposals, and help settle proposals that have been accepted.

**Mainnet**: [https://dashboard.l2protocol.com/governance](https://dashboard.l2protocol.com/governance)

## What is Governance?

L2 Protocol is governed on-chain. Instead of a central party changing network settings, changes are made through **proposals** that token holders vote on. If a proposal is accepted and executed, the change is applied automatically by the smart contracts.

Governance is used to adjust network parameters — for example the voting rules, staking limits, slashing penalties, or block-reward settings — and to signal community sentiment.

## What You Can Do

- **Review proposals** — see what is being proposed, the current vote split, and each proposal's status.
- **Vote** — cast a *For*, *Against*, or *Abstain* vote on active proposals using your voting power.
- **Create proposals** — submit a parameter change or a signal proposal.
- **Settle proposals** — queue and execute proposals that have been accepted.

## Proposal Types

**Parameter change (executable)**
A concrete on-chain change to a system contract, such as raising the maximum number of validators. These proposals can be queued and executed once accepted. They are always routed through the **GovHub** contract, which safely forwards the change to the target contract.

**Signal proposal (non-executable)**
A title and description only, with no on-chain action. Use these to gauge community opinion. A signal proposal can be voted on but cannot be queued or executed — it is non-binding by design.

## Proposal Lifecycle

Every proposal moves through a series of states:

| State | Meaning |
| --- | --- |
| **Pending** | Created, but voting has not started yet (there is a short voting delay). |
| **Active** | Voting is open — you can cast your vote. |
| **Defeated** | Voting ended without enough support or quorum. |
| **Succeeded** | Voting passed. The proposal can now be queued. |
| **Queued** | Scheduled in the timelock, waiting for the delay to pass. |
| **Executed** | The change has been applied on-chain. |
| **Canceled** | Withdrawn before it could be executed. |
| **Expired** | Accepted but not executed within the allowed window. |

The path for an executable proposal is: **Pending → Active → Succeeded → Queued → Executed**.

## Voting Power

Your voting power is based on your governance-token holdings (including votes delegated to you) at the moment voting **started** for that proposal. This snapshot means buying tokens after voting has begun does not increase your weight on that proposal.

If you have no voting power for a proposal, the interface will tell you, and the voting buttons will be unavailable.

For a proposal to pass, it needs both:

- **More *For* than *Against* votes**, and
- **Enough total participation to reach quorum** — a minimum share of the total voting power must take part.

## The Timelock

Accepted proposals are not executed instantly. They must first be **queued**, after which a mandatory **timelock delay** applies before execution is allowed. This delay gives the community time to react before a change goes live. The interface shows when a queued proposal becomes executable.

## Why Some Proposals Cannot Be Executed

For safety, the governor only allows execution through a single trusted entry point: the **GovHub** contract. Proposals created as parameter changes in the interface are automatically routed through GovHub, so they can be executed.

Signal proposals — and any proposal that targets a contract directly instead of via GovHub — cannot be queued or executed. The interface reflects this: it only offers the *Queue*/*Execute* actions for proposals that are actually executable, and explains why when they are not.

## Getting Started

You sign in to the dashboard with your wallet, so it is already connected when you open the governance page.

1. Open the [governance interface](https://dashboard.l2protocol.com/governance).
2. Browse the active and past proposals.
3. Vote, create, or settle proposals as described in the [Governance Guide](./governance-guide.md).

## Frequently Asked Questions

**Do I need to connect a wallet?**

You already are. You sign in to the dashboard with your wallet, so it is connected as soon as you open the governance page — ready to vote, create, queue, or execute.

**Why can't I vote on a proposal?**

Either the proposal is not in the *Active* state, you have already voted, or you have no voting power for that proposal (based on the snapshot taken when voting started).

**Why is the vote count shown as a percentage?**

The interface shows each option's share of the total votes for readability. Hover over a percentage to see the exact vote amount.

**I created a proposal but there is no Execute button. Why?**

Only executable (parameter-change) proposals that are accepted show *Queue*/*Execute*. Signal proposals are non-binding and cannot be executed. See [Why Some Proposals Cannot Be Executed](#why-some-proposals-cannot-be-executed).

**I clicked Execute but nothing happened / it was disabled.**

An accepted proposal must be **queued** first, then it waits for the timelock delay. The *Execute* button stays disabled until that delay has passed; the tooltip shows the time it becomes available.

## Resources

- [Governance Guide](./governance-guide.md) — step-by-step instructions for voting, creating, and settling proposals
- [Governance Interface](https://dashboard.l2protocol.com/governance) — review and act on proposals

---

*Questions about governance? Reach out through the L2 Protocol community channels.*
