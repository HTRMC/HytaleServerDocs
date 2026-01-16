---
sidebar_position: 2
---

# BuilderToolEntityAction

Performs an action on an entity using builder tools.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 401 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 5 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| entityId | int (4 bytes, LE) | No | Network ID of the target entity |
| action | EntityToolAction (byte enum) | No | Action to perform (Remove, etc.) |

## Usage

Sent by the client to perform a builder tool action on a specific entity, such as removing or modifying it in editor mode.
