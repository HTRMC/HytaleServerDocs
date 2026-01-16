---
sidebar_position: 20
---

# BuilderToolLaserPointer

Creates a laser pointer visual effect.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 419 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 36 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| playerNetworkId | int (4 bytes, LE) | No | Network ID of the player using the laser |
| startX | float (4 bytes, LE) | No | Starting X coordinate |
| startY | float (4 bytes, LE) | No | Starting Y coordinate |
| startZ | float (4 bytes, LE) | No | Starting Z coordinate |
| endX | float (4 bytes, LE) | No | Ending X coordinate |
| endY | float (4 bytes, LE) | No | Ending Y coordinate |
| endZ | float (4 bytes, LE) | No | Ending Z coordinate |
| color | int (4 bytes, LE) | No | Color of the laser pointer (ARGB) |
| durationMs | int (4 bytes, LE) | No | Duration to display the laser in milliseconds |

## Usage

Sent by the client to create a visible laser pointer line between two points. Used for pointing at locations in collaborative editor sessions.
