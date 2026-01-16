---
sidebar_position: 2
---

# CameraShakeEffect

Triggers a camera shake effect on the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 281 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Size** | 9 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| intensity | float | No | Shake intensity/amplitude |
| duration | float | No | Duration of the shake effect in seconds |
| shakeType | byte | No | Type or pattern of camera shake |

## Usage

Sent by the server to trigger a camera shake effect, typically used for impacts, explosions, or other dramatic events that should provide visual feedback to the player.
