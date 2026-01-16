---
sidebar_position: 3
---

# PlayAnimation

Triggers an animation on an entity.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 162 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 32,768,024 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| entityId | int32 | No | The entity to play the animation on |
| animationId | Variable | No | Identifier of the animation to play |
| parameters | Variable | Yes | Optional animation parameters |

## Usage

Sent by the server to instruct the client to play a specific animation on an entity. This is used for combat animations, emotes, interactions, and other visual feedback that needs to be synchronized across all clients viewing the entity. The animation system supports blending and layering for smooth transitions between animations.
