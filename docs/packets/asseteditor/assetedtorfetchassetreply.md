---
sidebar_position: 13
---

# AssetEdtorFetchAssetReply

Response containing the requested asset data.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 312 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| requestId | int32 | No | ID of the original request |
| assetPath | String | No | Path of the fetched asset |
| data | byte[] | Yes | The asset data |
| lastModified | int64 | No | Last modification timestamp |

## Usage

This packet is sent in response to an asset fetch request. It contains the complete asset data along with metadata about when it was last modified.
