---
sidebar_position: 1
---

# SyncInteractionChains

Synchronizes interaction chain states with the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 290 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| interactionData | byte[] | No | Serialized interaction chain state data |

## Usage

Sent by the server to synchronize the state of all active interaction chains with the client. Interaction chains represent sequences of player interactions with objects or NPCs in the game world.
