---
sidebar_position: 14
---

# BuilderToolOnUseInteraction

Handles builder tool use interactions.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 413 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 57 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| type | InteractionType (byte enum) | No | Type of interaction (Primary, Secondary, etc.) |
| x | int (4 bytes, LE) | No | Target X coordinate |
| y | int (4 bytes, LE) | No | Target Y coordinate |
| z | int (4 bytes, LE) | No | Target Z coordinate |
| offsetForPaintModeX | int (4 bytes, LE) | No | X offset for paint mode |
| offsetForPaintModeY | int (4 bytes, LE) | No | Y offset for paint mode |
| offsetForPaintModeZ | int (4 bytes, LE) | No | Z offset for paint mode |
| isAltPlaySculptBrushModDown | boolean (1 byte) | No | Alt modifier for sculpt brush |
| isHoldDownInteraction | boolean (1 byte) | No | Whether this is a held interaction |
| isDoServerRaytraceForPosition | boolean (1 byte) | No | Request server-side raytrace |
| isShowEditNotifications | boolean (1 byte) | No | Show edit notifications |
| maxLengthToolIgnoreHistory | int (4 bytes, LE) | No | Max length for history ignore |
| raycastOriginX | float (4 bytes, LE) | No | Raycast origin X coordinate |
| raycastOriginY | float (4 bytes, LE) | No | Raycast origin Y coordinate |
| raycastOriginZ | float (4 bytes, LE) | No | Raycast origin Z coordinate |
| raycastDirectionX | float (4 bytes, LE) | No | Raycast direction X component |
| raycastDirectionY | float (4 bytes, LE) | No | Raycast direction Y component |
| raycastDirectionZ | float (4 bytes, LE) | No | Raycast direction Z component |

## Usage

Sent by the client when using a builder tool. Contains detailed information about the interaction including position, raycast data, and various modifier states.
