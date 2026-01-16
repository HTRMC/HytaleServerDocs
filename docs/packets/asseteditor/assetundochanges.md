---
sidebar_position: 50
---

# AssetUndoChanges

Undoes the last change to an asset.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 349 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the asset |
| requestId | int32 | No | ID for tracking the request |

## Usage

This packet requests to undo the most recent change to an asset. The server will restore the previous state and notify the client of the result.
