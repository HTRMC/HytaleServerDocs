---
sidebar_position: 37
---

# AssetSelectAsset

Selects an asset in the editor.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 336 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetPath | String | No | Path of the asset to select |
| openEditor | boolean | No | Whether to open the asset editor |

## Usage

This packet selects an asset in the asset browser and optionally opens it in the editor. It is used for navigation and to synchronize selection state between components.
