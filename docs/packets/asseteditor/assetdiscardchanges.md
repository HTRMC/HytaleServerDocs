---
sidebar_position: 31
---

# AssetDiscardChanges

Discards pending changes to an asset.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 330 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the asset |
| requestId | int32 | No | ID for tracking the request |

## Usage

This packet discards any unsaved changes to an asset, reverting it to the last saved state. This operation cannot be undone.
