---
sidebar_position: 16
---

# UpdateServerPlayerListPing

Updates ping values for players in the client's player list.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 227 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 81,920,006 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| pingUpdates | PingEntry[] | No | Array of player ID and ping value pairs |

## PingEntry Structure

| Field | Type | Description |
|-------|------|-------------|
| playerId | UUID | Unique identifier of the player |
| ping | int32 | Current ping value in milliseconds |

## Usage

This packet is sent by the server to update the ping values displayed in the client's player list. This allows players to see the network latency of other players on the server, which is commonly displayed as colored bars or numerical values in the tab menu.
