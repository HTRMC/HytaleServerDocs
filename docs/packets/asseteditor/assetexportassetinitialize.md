---
sidebar_position: 44
---

# AssetExportAssetInitialize

Initializes the export of a single asset.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 343 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the asset being exported |
| totalSize | int64 | No | Total size of the export data |
| partCount | int32 | No | Number of parts to expect |

## Usage

This packet signals the start of exporting a specific asset. It provides information about the expected data size and number of parts that will follow.
