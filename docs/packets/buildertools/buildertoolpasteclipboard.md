---
sidebar_position: 8
---

# BuilderToolPasteClipboard

Pastes clipboard contents at a position.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 407 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 12 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int (4 bytes, LE) | No | X coordinate to paste at |
| y | int (4 bytes, LE) | No | Y coordinate to paste at |
| z | int (4 bytes, LE) | No | Z coordinate to paste at |

## Usage

Sent by the client to paste the current clipboard contents at the specified world coordinates.
