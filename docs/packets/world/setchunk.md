---
sidebar_position: 1
---

# SetChunk

Sends chunk block data to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 131 |
| **Direction** | Server to Client |
| **Compressed** | Yes |
| **Max Size** | 12,288,040 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int32 | No | Chunk X coordinate |
| y | int32 | No | Chunk Y coordinate |
| z | int32 | No | Chunk Z coordinate |
| localLight | byte[] (max 4,096,000) | Yes | Local lighting data for the chunk |
| globalLight | byte[] (max 4,096,000) | Yes | Global lighting data for the chunk |
| data | byte[] (max 4,096,000) | Yes | Compressed block data for the chunk |

## Usage

This packet is sent by the server to transmit chunk data to the client. It contains the block data along with local and global lighting information for a specific chunk at the given coordinates. The data is compressed due to its potentially large size. Chunks are typically 16x16x16 blocks and this packet is used when a player enters a new area or when chunk data needs to be updated.
