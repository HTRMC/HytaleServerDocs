---
sidebar_position: 10
---

# BuilderToolSelectionUpdate

Updates the current selection bounds.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 409 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 24 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| xMin | int (4 bytes, LE) | No | Minimum X coordinate of selection |
| yMin | int (4 bytes, LE) | No | Minimum Y coordinate of selection |
| zMin | int (4 bytes, LE) | No | Minimum Z coordinate of selection |
| xMax | int (4 bytes, LE) | No | Maximum X coordinate of selection |
| yMax | int (4 bytes, LE) | No | Maximum Y coordinate of selection |
| zMax | int (4 bytes, LE) | No | Maximum Z coordinate of selection |

## Usage

Sent by the client to update the current selection area bounds. Defines an axis-aligned bounding box for builder tool operations.
