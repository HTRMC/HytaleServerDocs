---
sidebar_position: 2
---

# SetGameMode

Sets the game mode for the player.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 101 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Size** | 1 byte (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| gameMode | byte (enum) | No | The game mode to set (Creative, Survival, Adventure, etc.) |

## Usage

Sent by the server to change the player's current game mode.
