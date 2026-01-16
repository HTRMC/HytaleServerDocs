---
sidebar_position: 15
---

# AssetEdAssetPackSetup

Sets up asset packs in the editor.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 314 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| packs | byte[] | No | Compressed list of available asset packs |

## Usage

This packet initializes the asset pack system in the editor. It provides a list of all available asset packs along with their metadata, enabling the editor to display and manage them.
