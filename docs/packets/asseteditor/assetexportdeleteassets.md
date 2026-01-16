---
sidebar_position: 47
---

# AssetExportDeleteAssets

Deletes assets during an export operation.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 346 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPaths | byte[] | No | Compressed list of asset paths to delete |

## Usage

This packet specifies assets that should be deleted as part of an export synchronization. It is used to remove assets that no longer exist in the source.
