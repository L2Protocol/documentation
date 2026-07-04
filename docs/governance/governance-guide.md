# Governance Guide

This guide explains how to use the L2 Protocol governance interface to review proposals, vote, create new proposals, and settle proposals that have been accepted.

**Mainnet**: [https://dashboard.l2protocol.com/governance](https://dashboard.l2protocol.com/governance)

If you are new to governance, read the [Governance overview](./README.md) first for the concepts (proposal types, lifecycle, voting power, and the timelock).

## 1. Before You Start

You sign in to the dashboard with your wallet, so it is already connected when you open the governance page — no separate connection step is needed. Just make sure:

- your wallet is on the L2 Protocol network, and
- it holds a small amount of L2P to cover transaction fees for voting, creating, or settling proposals.

## 2. Review Proposals

**Active Proposals** are shown as cards at the top. Each card shows the title, the proposer, a short description, and the current vote split.

- Votes are shown as **percentages** for *For*, *Against*, and *Abstain*. Hover over a percentage to see the exact vote amount.
- Each card also shows **your voting power** for that proposal and whether you have already voted.

**Past Proposals** are listed in a table with their final status (Succeeded, Defeated, Executed, and so on) and vote breakdown. Accepted proposals that still need action show *Queue* or *Execute* buttons here.

## 3. Vote on a Proposal

You can vote on any proposal in the **Active** state, as long as you have voting power and have not voted yet.

1. Find the proposal card.
2. Review the description and current results.
3. Click **For**, **Against**, or **Abstain**.
4. Confirm the transaction in your wallet.

After the transaction confirms, the card shows *You voted …*. Your choice is recorded on-chain and cannot be changed.

> **Note**: Your voting power is a snapshot taken when voting started. If the card shows you have no voting power, you either held no governance tokens (or delegated votes) at that moment, or voting is not open.

## 4. Create a Proposal

Click **New Proposal** to open the form. First choose the **proposal type**.

### Signal proposal (non-executable)

Use this to gauge community sentiment without making an on-chain change.

1. Select **Signal proposal**.
2. Enter a **Title** and **Description**.
3. Click **Create Proposal** and confirm the transaction.

A signal proposal can be voted on but cannot be queued or executed.

### Parameter change (executable)

Use this to change a network setting. The interface builds the change safely for you and routes it through the **GovHub** contract, so it can be executed once accepted.

1. Select **Parameter change**.
2. Enter a **Title** and **Description**.
3. Choose the **Target contract** — the system contract you want to change. A short description of the selected contract is shown to help you choose.
4. Choose the **Parameter key** — the specific setting to change. Each key shows a description of what it does and the allowed range.
5. Enter the **Value**. The interface knows the expected type for each parameter (an address, a whole number, or true/false) and validates your input against the allowed range.
6. Check the **Resulting call** preview, which shows exactly what will be submitted.
7. Click **Create Proposal** and confirm the transaction.

> **Tip**: For amounts and time-based settings, values are entered in their base unit (for example, token amounts in *wei* and durations in *seconds*). The description under each field states the expected unit and range.

Once created, your proposal starts in **Pending**, becomes **Active** after the voting delay, and is then open for voting.

## 5. Settle an Accepted Proposal

When an executable proposal passes, it must be **queued** and then **executed**. Both actions are available in the *Past Proposals* table.

### Queue

1. Find the proposal with status **Succeeded**.
2. Click **Queue** and confirm the transaction.

This schedules the proposal in the timelock. Its status changes to **Queued**.

### Execute

1. Wait for the **timelock delay** to pass. While waiting, the *Execute* button is disabled and its tooltip shows the time it becomes available.
2. Once the delay has passed, click **Execute** and confirm the transaction.

The change is now applied on-chain and the proposal status becomes **Executed**.

> **Note**: Queue and Execute are only offered for proposals that can actually be settled. Signal proposals and proposals that do not go through GovHub will not show these buttons.

## Troubleshooting

**The voting buttons are missing or greyed out.**
The proposal is not *Active*, you have already voted, or you have no voting power for it. Voting power is based on your holdings when voting started.

**The Queue or Execute button is not shown.**
The proposal is either not accepted yet, or it is a signal proposal (non-executable). Only accepted parameter-change proposals can be settled.

**The Execute button is disabled with a time in the tooltip.**
The proposal is queued but the timelock delay has not passed yet. Wait until the shown time, then execute.

**My transaction failed with a "not whitelisted" error.**
Only proposals routed through the GovHub contract can be executed. Proposals created as parameter changes in this interface are routed correctly. Proposals that target a contract directly cannot be executed.

**I don't see my newly created proposal in the active list.**
New proposals start as *Pending* during the voting delay and become *Active* once voting opens. The list also refreshes as the network indexes the new proposal.

## Resources

- [Governance overview](./README.md) — concepts, proposal lifecycle, and voting power
- [Governance Interface](https://dashboard.l2protocol.com/governance) — review and act on proposals

---

*Need help? Reach out through the L2 Protocol community channels.*
