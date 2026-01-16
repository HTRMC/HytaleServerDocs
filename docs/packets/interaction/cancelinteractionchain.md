---
sidebar_position: 2
---

# CancelInteractionChain

Cancels an active interaction chain.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 291 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Max Size** | 1,038 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| chainId | int | No | Identifier of the interaction chain to cancel |
| reason | byte[] | Yes | Optional cancellation reason or context data |

## Usage

Sent by the client to cancel an ongoing interaction chain. This may be triggered by player input (like pressing escape) or by other game events that interrupt the interaction sequence.
