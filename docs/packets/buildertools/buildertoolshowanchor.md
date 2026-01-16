---
sidebar_position: 16
---

# BuilderToolShowAnchor

Displays an anchor point at a position.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 415 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 12 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int (4 bytes, LE) | No | X coordinate of the anchor |
| y | int (4 bytes, LE) | No | Y coordinate of the anchor |
| z | int (4 bytes, LE) | No | Z coordinate of the anchor |

## Usage

Sent by the client to display a visual anchor point at the specified coordinates. Anchors are used as reference points for builder tool operations.
