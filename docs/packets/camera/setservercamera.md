---
sidebar_position: 1
---

# SetServerCamera

Sets the camera configuration from the server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 280 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Size** | 157 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| cameraSettings | byte[157] | No | Serialized camera configuration data |

## Usage

Sent by the server to configure the client's camera settings. This may include camera position, rotation, field of view, near/far planes, and other rendering parameters.
