---
sidebar_position: 4
---

# SetBlockPlacementOverride

Sets the block placement mode override for the player.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 103 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Size** | 1 byte (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| placementMode | byte (enum) | No | Block placement mode override setting |

## Usage

Sent by the server to override the player's default block placement behavior.
