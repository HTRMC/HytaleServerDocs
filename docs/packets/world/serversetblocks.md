---
sidebar_position: 8
---

# ServerSetBlocks

Updates multiple blocks in the world in bulk.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 141 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 36,864,017 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int32 | No | Base chunk X coordinate |
| y | int32 | No | Base chunk Y coordinate |
| z | int32 | No | Base chunk Z coordinate |
| cmds | SetBlockCmd[] (max 4,096,000) | No | Array of block change commands |

### SetBlockCmd Structure

Each SetBlockCmd contains information about a single block update within the chunk.

## Usage

This packet is sent by the server to update multiple blocks at once, which is more efficient than sending individual ServerSetBlock packets. It is commonly used for explosions, large-scale terrain modifications, or structure generation. The coordinates specify the base chunk position, and each command in the array specifies a relative position within that area.
