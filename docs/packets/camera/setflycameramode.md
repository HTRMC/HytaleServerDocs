---
sidebar_position: 4
---

# SetFlyCameraMode

Sets the fly camera mode state.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 283 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Size** | 1 byte (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| enabled | boolean | No | Whether fly camera mode is enabled |

## Usage

Sent by the server to confirm or set the fly camera mode state. This allows the client to detach the camera from the player character for cinematic or creative purposes.
