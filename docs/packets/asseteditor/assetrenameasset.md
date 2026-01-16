---
sidebar_position: 29
---

# AssetRenameAsset

Renames an existing asset.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 328 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| oldPath | String | No | Current path of the asset |
| newPath | String | No | New path for the asset |
| requestId | int32 | No | ID for tracking the request |

## Usage

This packet renames or moves an asset to a new path. References to the asset in other files may need to be updated accordingly.
