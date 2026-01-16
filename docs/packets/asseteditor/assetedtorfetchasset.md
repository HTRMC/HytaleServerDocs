---
sidebar_position: 11
---

# AssetEdtorFetchAsset

Requests to fetch an asset from the server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 310 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 32,768,025 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the asset to fetch |
| requestId | int32 | No | ID for tracking the request |

## Usage

This packet is sent to request the contents of a specific asset. The server will respond with the asset data or an error if the asset cannot be found or accessed.
