---
sidebar_position: 30
---

# AssetDeleteAsset

Deletes an asset.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 329 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the asset to delete |
| requestId | int32 | No | ID for tracking the request |

## Usage

This packet deletes an asset from the asset pack. The deletion may be reversible through the undo system depending on the server configuration.
