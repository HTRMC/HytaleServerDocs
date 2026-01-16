---
sidebar_position: 12
---

# BuilderToolSelectionToolReplyWithClipboard

Server response containing clipboard data.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 411 |
| **Direction** | Server -> Client |
| **Compressed** | Yes |
| **Max Size** | 139,264,019 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| blocksChange | BlockChange[] (max 4,096,000 elements) | Yes | Array of block changes in clipboard |
| fluidsChange | FluidChange[] (max 4,096,000 elements) | Yes | Array of fluid changes in clipboard |

## Usage

Sent by the server in response to a BuilderToolSelectionToolAskForClipboard request. Contains the block and fluid data currently stored in the clipboard. This packet is compressed due to its potentially large size.
