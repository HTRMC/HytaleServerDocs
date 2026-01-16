---
sidebar_position: 3
---

# SetChunkTintmap

Sends chunk tint/color data to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 133 |
| **Direction** | Server to Client |
| **Compressed** | Yes |
| **Max Size** | 4,096,014 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int32 | No | Chunk X coordinate |
| z | int32 | No | Chunk Z coordinate |
| tintmap | byte[] (max 4,096,000) | Yes | Tint color data for the chunk |

## Usage

This packet is sent by the server to provide tint/color information for a chunk. The tintmap stores color modification data that is applied to blocks for visual effects such as biome-specific grass and foliage colors, seasonal variations, or other environmental coloring. The data is compressed due to its potentially large size.
