---
sidebar_position: 20
---

# AssetEAssetListSetup

Sets up the initial asset list in the editor.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 319 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assets | byte[] | No | Compressed list of all assets |
| directories | byte[] | No | Compressed directory structure |

## Usage

This packet provides the complete asset list when initializing the editor. It includes all available assets and their directory structure, enabling the asset browser to display the full hierarchy.
