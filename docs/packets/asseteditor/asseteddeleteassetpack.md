---
sidebar_position: 18
---

# AssetEdDeleteAssetPack

Deletes an asset pack.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 317 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| packId | String | No | ID of the asset pack to delete |
| deleteAssets | boolean | No | Whether to delete contained assets |

## Usage

This packet deletes an asset pack from the editor. If deleteAssets is true, all assets within the pack will also be removed; otherwise, they may be moved to a default pack.
