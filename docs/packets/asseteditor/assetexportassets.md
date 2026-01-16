---
sidebar_position: 43
---

# AssetExportAssets

Initiates an asset export operation.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 342 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPaths | byte[] | No | Compressed list of asset paths to export |
| format | String | No | Export format identifier |

## Usage

This packet initiates the export of selected assets. The export process may involve multiple subsequent packets to transfer large assets.
