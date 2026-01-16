---
sidebar_position: 7
---

# BuilderToolRotateClipboard

Rotates the clipboard contents around an axis.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 406 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 5 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| angle | int (4 bytes, LE) | No | Rotation angle in degrees |
| axis | Axis (byte enum) | No | Axis to rotate around (X, Y, Z) |

## Usage

Sent by the client to rotate the current clipboard contents by a specified angle around a given axis before pasting.
