---
sidebar_position: 13
---

# UpdateTime

Updates the current world time.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 146 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 13 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| gameTime | InstantData (12 bytes) | Yes | Current game time data |

### InstantData Structure

InstantData contains timestamp information representing the current in-game time.

## Usage

This packet is sent by the server to synchronize the current world time with the client. It is typically sent periodically to keep clients in sync and also after time changes (such as sleeping or time commands). The gameTime field contains the precise in-game time used for day/night cycle calculations and time-dependent events.
