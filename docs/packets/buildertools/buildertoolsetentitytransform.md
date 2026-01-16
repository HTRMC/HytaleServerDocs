---
sidebar_position: 3
---

# BuilderToolSetEntityTransform

Sets the transform (position, rotation, scale) of an entity.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 402 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 54 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| entityId | int (4 bytes, LE) | No | Network ID of the target entity |
| modelTransform | ModelTransform (49 bytes) | Yes | The new transform data for the entity |

## Usage

Sent by the client to update an entity's transform in the world. The ModelTransform contains position, rotation, and scale information used when manipulating entities with builder tools.
