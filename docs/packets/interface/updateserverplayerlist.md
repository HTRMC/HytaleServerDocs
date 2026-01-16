---
sidebar_position: 15
---

# UpdateServerPlayerList

Updates player information in the client's player list.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 226 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 131,072,006 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| playerId | UUID | No | Unique identifier of the player to update |
| playerName | String | Yes | Updated display name |
| playerData | byte[] | Yes | Updated player metadata |

## Usage

This packet is sent by the server to update information about a specific player in the client's player list. This can include changes to the player's display name, status, team, or other attributes that should be reflected in the player list UI.
