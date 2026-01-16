---
sidebar_position: 5
---

# BuilderToolStackArea

Stacks a selection area in a specified direction.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 404 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 41 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| selectionMin | BlockPosition (12 bytes) | Yes | Minimum corner of the selection area |
| selectionMax | BlockPosition (12 bytes) | Yes | Maximum corner of the selection area |
| xNormal | int (4 bytes, LE) | No | X component of the stack direction |
| yNormal | int (4 bytes, LE) | No | Y component of the stack direction |
| zNormal | int (4 bytes, LE) | No | Z component of the stack direction |
| numStacks | int (4 bytes, LE) | No | Number of times to stack the selection |

## Usage

Sent by the client to duplicate and stack a selected region multiple times in a specified direction. Used for repetitive building patterns.
