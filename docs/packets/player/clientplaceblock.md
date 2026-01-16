---
sidebar_position: 18
---

# ClientPlaceBlock

Requests placement of a block in the world.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 117 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 20 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| blockPlacementData | byte[] (20 bytes) | No | Block placement information including position and block type |

## Usage

Sent by the client when the player attempts to place a block in the world.
