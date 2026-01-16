---
sidebar_position: 45
---

# AssetExportAssetPart

Sends a part of an asset export.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 344 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the asset being exported |
| partIndex | int32 | No | Index of this part |
| data | byte[] | No | Compressed export data for this part |

## Usage

This packet sends a chunk of export data for a large asset. Multiple part packets are sent sequentially until the entire asset is transferred.
