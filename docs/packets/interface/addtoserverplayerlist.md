---
sidebar_position: 13
---

# AddToServerPlayerList

Notifies the client that a player has joined the server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 224 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| playerId | UUID | No | Unique identifier of the joining player |
| playerName | String | No | Display name of the joining player |
| playerData | byte[] | Yes | Additional player metadata |

## Usage

This packet is sent by the server when a new player joins, notifying all connected clients to add this player to their player list. This enables the client to display the updated player list in the tab menu or other UI elements that show online players.
