---
sidebar_position: 14
---

# AssetEdtorFetchJsonAssetWithParentsReply

Response containing a JSON asset and its parent chain.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 313 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| requestId | int32 | No | ID of the original request |
| assetPath | String | No | Path of the requested asset |
| assets | byte[] | No | Compressed array of assets in inheritance chain |
| mergedProperties | byte[] | Yes | Computed merged properties |

## Usage

This packet responds to a fetch request for a JSON asset with its parents. It includes the entire inheritance chain, allowing the editor to display both the asset's own properties and inherited values.
