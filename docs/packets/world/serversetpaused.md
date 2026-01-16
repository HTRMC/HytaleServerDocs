---
sidebar_position: 26
---

# ServerSetPaused

Server confirmation of game pause state.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 159 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1 byte |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| paused | boolean | No | Whether the game is currently paused |

## Usage

This packet is sent by the server to inform the client of the current game pause state. It is sent in response to a SetPaused request from a client or when the pause state changes for other reasons (such as another player with permissions pausing the game). When paused, game simulation typically stops but rendering continues.
