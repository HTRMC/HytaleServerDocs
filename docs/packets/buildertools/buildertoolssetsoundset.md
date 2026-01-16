---
sidebar_position: 19
---

# BuilderToolsSetSoundSet

Sets the active sound set for builder tools.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 418 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 4 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| soundSetIndex | int (4 bytes, LE) | No | Index of the sound set to use |

## Usage

Sent by the client to change the active sound set used by builder tools. Different sound sets provide different audio feedback for tool operations.
