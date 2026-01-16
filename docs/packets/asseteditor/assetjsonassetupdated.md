---
sidebar_position: 26
---

# AssetJsonAssetUpdated

Notification that a JSON asset has been updated.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 325 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the updated asset |
| timestamp | int64 | No | Update timestamp |
| updatedBy | String | Yes | User who made the update |

## Usage

This packet notifies connected clients that a JSON asset has been updated. It is broadcast to all clients editing the same asset pack to keep editors synchronized.
