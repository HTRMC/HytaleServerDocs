---
sidebar_position: 1
---

# Status

Server status response containing basic server information.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 10 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 2587 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| name | String | Yes | Server name (max 128 characters) |
| motd | String | Yes | Message of the day (max 512 characters) |
| playerCount | int32 | No | Current number of players online |
| maxPlayers | int32 | No | Maximum player capacity |

## Usage

This packet is sent by the server in response to a status query from the client. It provides basic information about the server including its name, message of the day (MOTD), current player count, and maximum player capacity. This is typically used for server list displays and connection previews.
