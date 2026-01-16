---
sidebar_position: 7
---

# ServerSetBlock

Updates a single block in the world.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 140 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 19 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int32 | No | Block X coordinate (world position) |
| y | int32 | No | Block Y coordinate (world position) |
| z | int32 | No | Block Z coordinate (world position) |
| blockId | int32 | No | The block type ID to set |
| filler | int16 | No | Additional block data/metadata |
| rotation | byte | No | Block rotation value |

## Usage

This packet is sent by the server to update a single block at a specific world position. It is used for real-time block changes such as player-placed blocks, block breaking, or environmental changes. For updating multiple blocks at once, use ServerSetBlocks instead.
