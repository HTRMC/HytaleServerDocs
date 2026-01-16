---
sidebar_position: 15
---

# BuilderToolLineAction

Draws a line of blocks between two points.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 414 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 24 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| xStart | int (4 bytes, LE) | No | Starting X coordinate |
| yStart | int (4 bytes, LE) | No | Starting Y coordinate |
| zStart | int (4 bytes, LE) | No | Starting Z coordinate |
| xEnd | int (4 bytes, LE) | No | Ending X coordinate |
| yEnd | int (4 bytes, LE) | No | Ending Y coordinate |
| zEnd | int (4 bytes, LE) | No | Ending Z coordinate |

## Usage

Sent by the client to create a line of blocks from the start position to the end position using the current builder tool settings.
