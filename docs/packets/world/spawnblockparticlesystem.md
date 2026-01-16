---
sidebar_position: 20
---

# SpawnBlockParticleSystem

Spawns a block-related particle system.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 153 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 30 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| blockId | int32 | No | The block type ID that determines particle appearance |
| particleType | BlockParticleEvent (byte enum) | No | Type of block particle event (Walk, Break, Place, etc.) |
| position | Position (24 bytes) | Yes | World position to spawn the particles (x, y, z as doubles) |

### BlockParticleEvent Values

- Walk: Particles from walking on the block
- Break: Particles from breaking the block
- Place: Particles from placing the block
- And other block interaction types

## Usage

This packet is sent by the server to spawn block-specific particle effects. Unlike generic particle systems, these particles derive their appearance from the specified block type (texture, color, etc.). Common uses include block breaking debris, footstep particles, and block placement effects.
