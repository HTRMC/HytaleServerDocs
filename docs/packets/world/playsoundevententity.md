---
sidebar_position: 23
---

# PlaySoundEventEntity

Plays a sound effect attached to an entity.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 156 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 16 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| soundEventIndex | int32 | No | Index of the sound event to play |
| networkId | int32 | No | Network ID of the entity to attach the sound to |
| volumeModifier | float | No | Volume multiplier (1.0 = normal) |
| pitchModifier | float | No | Pitch multiplier (1.0 = normal) |

## Usage

This packet is sent by the server to play a sound that follows a specific entity. Unlike PlaySoundEvent3D which plays at a fixed position, this sound will move with the entity. It is used for sounds that should track with moving entities such as footsteps, creature vocalizations, vehicle sounds, and other entity-attached audio.
