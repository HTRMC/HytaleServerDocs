---
sidebar_position: 28
---

# AssetCreateAsset

Creates a new asset.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 327 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path for the new asset |
| assetType | String | No | Type of asset to create |
| initialData | byte[] | Yes | Initial asset content |
| requestId | int32 | No | ID for tracking the request |

## Usage

This packet creates a new asset at the specified path. The asset type determines the schema and validation rules applied. Initial data can be provided or the asset will be created with default values.
