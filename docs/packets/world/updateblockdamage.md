---
sidebar_position: 11
---

# UpdateBlockDamage

Updates the damage state of a block being broken.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 144 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 21 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| blockPosition | BlockPosition (12 bytes) | Yes | Position of the block being damaged |
| damage | float | No | Current damage amount (0.0 to 1.0) |
| delta | float | No | Change in damage since last update |

### BlockPosition Structure

BlockPosition contains x, y, z integer coordinates (4 bytes each).

## Usage

This packet is sent by the server to update the visual damage state of a block that is being broken by a player or other entity. The damage value ranges from 0.0 (no damage) to 1.0 (fully broken). Clients use this to display the appropriate cracking texture overlay on the block.
