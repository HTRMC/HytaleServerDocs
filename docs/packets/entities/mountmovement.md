---
sidebar_position: 7
---

# MountMovement

Synchronizes movement data for mounted entities and vehicles.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 166 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 59 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| mountEntityId | int32 | No | Entity ID of the mount or vehicle |
| riderEntityId | int32 | No | Entity ID of the rider |
| positionX | float32 | No | X coordinate of the mount position |
| positionY | float32 | No | Y coordinate of the mount position |
| positionZ | float32 | No | Z coordinate of the mount position |
| rotationYaw | float32 | No | Yaw rotation of the mount |
| rotationPitch | float32 | No | Pitch rotation of the mount |
| velocityX | float32 | No | X component of mount velocity |
| velocityY | float32 | No | Y component of mount velocity |
| velocityZ | float32 | No | Z component of mount velocity |

## Usage

Sent by the server to synchronize the movement of mounted entities such as horses, vehicles, or other rideable creatures. This packet ensures that both the mount and rider positions are properly synchronized across all clients. The movement data includes full position, rotation, and velocity information to enable smooth interpolation on the client side.
