---
sidebar_position: 5
---

# UnloadChunk

Instructs the client to unload a chunk from memory.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 135 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 8 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| chunkX | int32 | No | Chunk X coordinate to unload |
| chunkZ | int32 | No | Chunk Z coordinate to unload |

## Usage

This packet is sent by the server when a chunk is no longer within the player's view distance and should be removed from the client's memory. This helps manage client-side resources by freeing memory for chunks that are no longer needed.
