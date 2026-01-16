---
sidebar_position: 4
---

# ChangeVelocity

Updates the velocity of an entity.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 163 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 35 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| entityId | int32 | No | The entity whose velocity is being changed |
| velocityX | float32 | No | X component of the new velocity |
| velocityY | float32 | No | Y component of the new velocity |
| velocityZ | float32 | No | Z component of the new velocity |

## Usage

Sent by the server to update the velocity of an entity on the client. This packet is used when an entity's velocity needs to be authoritatively set by the server, such as when affected by explosions, environmental effects, or physics interactions. The client will apply this velocity to the entity's movement calculations.
