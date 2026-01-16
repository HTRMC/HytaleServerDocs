---
sidebar_position: 2
---

# SetChunkHeightmap

Sends chunk heightmap data to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 132 |
| **Direction** | Server to Client |
| **Compressed** | Yes |
| **Max Size** | 4,096,014 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int32 | No | Chunk X coordinate |
| z | int32 | No | Chunk Z coordinate |
| heightmap | byte[] (max 4,096,000) | Yes | Heightmap data for the chunk |

## Usage

This packet is sent by the server to provide heightmap information for a chunk. The heightmap stores the highest non-air block at each XZ position within the chunk, which is used for rendering optimization, lighting calculations, and determining spawn positions. The data is compressed due to its potentially large size.
