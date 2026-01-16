---
sidebar_position: 22
---

# PlaySoundEvent3D

Plays a 3D (positional) sound effect at a world location.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 155 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 38 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| soundEventIndex | int32 | No | Index of the sound event to play |
| category | SoundCategory (byte enum) | No | Audio category (Music, SFX, etc.) |
| position | Position (24 bytes) | Yes | World position of the sound (x, y, z as doubles) |
| volumeModifier | float | No | Volume multiplier (1.0 = normal) |
| pitchModifier | float | No | Pitch multiplier (1.0 = normal) |

### SoundCategory Values

- Music: Background music
- SFX: Sound effects
- Ambient: Environmental sounds
- And other audio categories

## Usage

This packet is sent by the server to play a positional (3D) sound at a specific world location. The sound will be affected by distance attenuation and stereo panning based on the player's position relative to the sound source. It is used for in-world sounds such as explosions, creature noises, block interactions, and environmental audio.
