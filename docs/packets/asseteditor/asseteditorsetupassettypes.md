---
sidebar_position: 7
---

# AssetEditorSetupAssetTypes

Sets up the available asset types in the editor.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 306 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assetTypes | byte[] | No | Compressed asset type definitions |

## Usage

This packet provides the definitions of all available asset types that can be created or edited in the asset editor. It includes information about each type's properties, validation rules, and editor behavior.
