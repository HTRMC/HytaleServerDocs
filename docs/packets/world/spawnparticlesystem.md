---
sidebar_position: 19
---

# SpawnParticleSystem

Spawns a particle system in the world.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 152 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 16,384,049 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| particleSystemId | String (max 4,096,000, UTF-8) | Yes | Identifier of the particle system to spawn |
| position | Position (24 bytes) | Yes | World position to spawn the particles (x, y, z as doubles) |
| rotation | Direction (12 bytes) | Yes | Rotation/direction of the particle system |
| scale | float | No | Scale multiplier for the particle system |
| color | Color (3 bytes) | Yes | Color tint to apply to the particles (RGB) |

## Usage

This packet is sent by the server to spawn a particle effect at a specific location in the world. It is used for visual effects such as explosions, magic spells, environmental effects, and other particle-based visuals. The particle system is identified by its string ID, and can be customized with position, rotation, scale, and color.
