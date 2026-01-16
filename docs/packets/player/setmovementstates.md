---
sidebar_position: 3
---

# SetMovementStates

Sets movement state flags for the player.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 102 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Size** | 2 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| movementStates | short (2 bytes) | No | Bitfield of movement state flags (sprinting, sneaking, flying, etc.) |

## Usage

Sent by the server to update the player's movement capabilities and states.
