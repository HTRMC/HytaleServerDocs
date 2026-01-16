---
sidebar_position: 52
---

# AssetUndoRedoReply

Response to an undo or redo operation.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 351 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| requestId | int32 | No | ID of the original request |
| success | boolean | No | Whether the operation succeeded |
| assetPath | String | No | Path of the affected asset |
| canUndo | boolean | No | Whether more undo operations are available |
| canRedo | boolean | No | Whether more redo operations are available |

## Usage

This packet responds to an undo or redo request with the operation result. It also indicates whether additional undo/redo operations are available for the asset.
