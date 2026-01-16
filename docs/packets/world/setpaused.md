---
sidebar_position: 25
---

# SetPaused

Client request to pause or unpause the game.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 158 |
| **Direction** | Client to Server |
| **Compressed** | No |
| **Max Size** | 1 byte |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| paused | boolean | No | Whether the game should be paused |

## Usage

This packet is sent by the client to request pausing or unpausing the game. This is typically only effective in single-player mode or when the requesting player has appropriate permissions on a server. The server will respond with a ServerSetPaused packet to confirm the actual pause state.
