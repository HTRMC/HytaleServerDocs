---
sidebar_position: 10
---

# AssetEditorEnameDirectory

Renames a directory in the asset structure.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 309 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 65,536,051 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| oldPath | String | No | Current path of the directory |
| newPath | String | No | New path for the directory |

## Usage

This packet is sent to rename or move a directory within the asset hierarchy. All references to assets within the directory may need to be updated accordingly.
