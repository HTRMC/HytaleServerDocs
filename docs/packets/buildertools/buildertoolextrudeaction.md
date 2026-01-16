---
sidebar_position: 4
---

# BuilderToolExtrudeAction

Performs an extrude action on blocks in a direction.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 403 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 24 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int (4 bytes, LE) | No | X coordinate of the target block |
| y | int (4 bytes, LE) | No | Y coordinate of the target block |
| z | int (4 bytes, LE) | No | Z coordinate of the target block |
| xNormal | int (4 bytes, LE) | No | X component of the extrude direction normal |
| yNormal | int (4 bytes, LE) | No | Y component of the extrude direction normal |
| zNormal | int (4 bytes, LE) | No | Z component of the extrude direction normal |

## Usage

Sent by the client to extrude blocks from a specific position in a given direction. The normal vector indicates the direction of extrusion.
