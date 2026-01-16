---
sidebar_position: 24
---

# AssetUpdateJsonAsset

Updates a JSON asset with new content.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 323 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the asset to update |
| jsonData | byte[] | No | Compressed JSON content |
| requestId | int32 | No | ID for tracking the request |

## Usage

This packet sends updated JSON content for an asset. The JSON data is compressed and validated against the asset's schema before being saved.
