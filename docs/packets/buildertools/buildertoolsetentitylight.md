---
sidebar_position: 23
---

# BuilderToolSetEntityLight

Sets the light properties of an entity.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 422 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 9 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| entityId | int (4 bytes, LE) | No | Network ID of the target entity |
| light | ColorLight (4 bytes) | Yes | Light color and intensity values |

## Usage

Sent by the client to set or modify the light emission properties of an entity. Allows entities to emit colored light in the editor.
