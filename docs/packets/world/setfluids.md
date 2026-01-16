---
sidebar_position: 6
---

# SetFluids

Sends fluid state data for a chunk to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 136 |
| **Direction** | Server to Client |
| **Compressed** | Yes |
| **Max Size** | 4,096,018 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int32 | No | Chunk X coordinate |
| y | int32 | No | Chunk Y coordinate |
| z | int32 | No | Chunk Z coordinate |
| data | byte[] (max 4,096,000) | Yes | Fluid state data for the chunk |

## Usage

This packet is sent by the server to provide fluid information (water, lava, etc.) for a chunk. The fluid data includes the type and level of fluids at each position within the chunk. This is sent separately from block data to allow for independent fluid simulation and updates. The data is compressed due to its potentially large size.
