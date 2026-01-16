---
sidebar_position: 51
---

# AssetRedoChanges

Redoes a previously undone change to an asset.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 350 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the asset |
| requestId | int32 | No | ID for tracking the request |

## Usage

This packet requests to redo a change that was previously undone. The server will reapply the change and notify the client of the result.
