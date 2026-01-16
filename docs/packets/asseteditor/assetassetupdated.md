---
sidebar_position: 27
---

# AssetAssetUpdated

Notification that a binary asset has been updated.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 326 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the updated asset |
| timestamp | int64 | No | Update timestamp |
| size | int32 | No | New file size |

## Usage

This packet notifies connected clients that a binary asset has been updated. It is broadcast to synchronize the state across all connected editors.
