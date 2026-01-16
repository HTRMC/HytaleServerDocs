---
sidebar_position: 12
---

# AssetEdtorFetchJsonAssetWithParents

Requests a JSON asset along with its parent chain.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 311 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the JSON asset to fetch |
| requestId | int32 | No | ID for tracking the request |
| includeInherited | boolean | No | Whether to include inherited properties |

## Usage

This packet requests a JSON asset along with all of its parent assets in the inheritance chain. This is useful for understanding the full property set of an asset that inherits from other assets.
