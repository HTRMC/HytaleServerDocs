---
sidebar_position: 5
---

# ApplyKnockback

Applies a knockback force to an entity.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 164 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 38 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| entityId | int32 | No | The entity receiving the knockback |
| forceX | float32 | No | X component of the knockback force |
| forceY | float32 | No | Y component of the knockback force |
| forceZ | float32 | No | Z component of the knockback force |
| sourceId | int32 | Yes | Entity ID of the knockback source |

## Usage

Sent by the server to apply a knockback effect to an entity, typically as a result of combat, explosions, or other forceful interactions. Unlike ChangeVelocity, this packet specifically handles knockback mechanics which may include resistance calculations, stun effects, and combat-specific behavior. The optional source ID can be used to determine the direction and apply appropriate visual effects.
