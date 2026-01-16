---
sidebar_position: 18
---

# UpdateEnvironmentMusic

Updates the current environment music.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 151 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 4 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| environmentIndex | int32 | No | Index of the environment music to play |

## Usage

This packet is sent by the server to change the background music based on the current environment or biome. The environmentIndex references an environment defined in the game's assets, which determines which ambient music and soundscape should be played. This creates immersive audio that matches the player's surroundings.
