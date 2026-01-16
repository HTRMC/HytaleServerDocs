---
sidebar_position: 19
---

# AssetEnableAssetPack

Enables or disables an asset pack.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 318 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| packId | String | No | ID of the asset pack |
| enabled | boolean | No | Whether the pack should be enabled |

## Usage

This packet toggles the enabled state of an asset pack. Disabled packs and their assets are not loaded into the game but remain available for editing.
