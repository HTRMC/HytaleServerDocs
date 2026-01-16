---
sidebar_position: 21
---

# BuilderToolSetEntityScale

Sets the scale of an entity.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 420 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 8 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| entityId | int (4 bytes, LE) | No | Network ID of the target entity |
| scale | float (4 bytes, LE) | No | New scale value for the entity |

## Usage

Sent by the client to change the scale of an entity in the editor. Allows resizing entities using builder tools.
