---
sidebar_position: 4
---

# SetChunkEnvironments

Sends chunk environment data to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 134 |
| **Direction** | Server to Client |
| **Compressed** | Yes |
| **Max Size** | 4,096,014 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int32 | No | Chunk X coordinate |
| z | int32 | No | Chunk Z coordinate |
| environments | byte[] (max 4,096,000) | Yes | Environment data for the chunk |

## Usage

This packet is sent by the server to provide environment information for a chunk. The environment data determines which biome or environment type applies to different areas within the chunk, affecting ambient sounds, music, weather effects, and other environmental features. The data is compressed due to its potentially large size.
