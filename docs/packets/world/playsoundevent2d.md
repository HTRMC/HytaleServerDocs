---
sidebar_position: 21
---

# PlaySoundEvent2D

Plays a 2D (non-positional) sound effect.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 154 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 13 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| soundEventIndex | int32 | No | Index of the sound event to play |
| category | SoundCategory (byte enum) | No | Audio category (Music, SFX, etc.) |
| volumeModifier | float | No | Volume multiplier (1.0 = normal) |
| pitchModifier | float | No | Pitch multiplier (1.0 = normal) |

### SoundCategory Values

- Music: Background music
- SFX: Sound effects
- Ambient: Environmental sounds
- UI: User interface sounds
- And other audio categories

## Usage

This packet is sent by the server to play a non-positional (2D) sound that is heard at the same volume regardless of player position. It is commonly used for UI sounds, music, announcements, and other audio that should not be affected by 3D positioning.
