---
sidebar_position: 17
---

# AssetEdCreateAssetPack

Creates a new asset pack.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 316 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| packId | String | No | Unique ID for the new pack |
| name | String | No | Display name of the pack |
| metadata | byte[] | Yes | Initial pack metadata |

## Usage

This packet creates a new asset pack in the editor. The pack can then be populated with assets and configured with dependencies on other packs.
