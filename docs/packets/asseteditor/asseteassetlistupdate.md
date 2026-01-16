---
sidebar_position: 21
---

# AssetEAssetListUpdate

Updates the asset list with changes.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 320 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| addedAssets | byte[] | Yes | Newly added assets |
| removedAssets | byte[] | Yes | Removed asset paths |
| modifiedAssets | byte[] | Yes | Modified asset metadata |

## Usage

This packet sends incremental updates to the asset list. It contains only the changes since the last update, making it more efficient than sending the complete list each time.
