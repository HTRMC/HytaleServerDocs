---
sidebar_position: 25
---

# AssetUpdateAsset

Updates a binary asset with new content.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 324 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the asset to update |
| data | byte[] | No | New asset content |
| requestId | int32 | No | ID for tracking the request |

## Usage

This packet sends updated binary content for a non-JSON asset such as textures, models, or audio files. The content is validated based on the asset type.
