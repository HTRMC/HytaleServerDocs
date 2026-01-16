---
sidebar_position: 14
---

# RemoveFromServerPlayerList

Notifies the client that a player has left the server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 225 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 65,536,006 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| playerId | UUID | No | Unique identifier of the leaving player |

## Usage

This packet is sent by the server when a player disconnects, notifying all connected clients to remove this player from their player list. This keeps the client's player list synchronized with the actual online players on the server.
