---
sidebar_position: 12
---

# ServerInfo

Sends server information to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 223 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 32,768,023 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| serverName | String | No | Display name of the server |
| serverDescription | String | Yes | Server description text |
| maxPlayers | int32 | No | Maximum player capacity |
| currentPlayers | int32 | No | Current number of players online |
| serverIcon | byte[] | Yes | Server icon image data |
| serverRules | String | Yes | Server rules or additional information |

## Usage

This packet is sent by the server to provide general server information to the client. This information is typically displayed in server browsers, connection screens, or server information panels within the game interface.
