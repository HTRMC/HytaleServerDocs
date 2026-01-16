---
sidebar_position: 8
---

# AssetEditorCreateDiretory

Creates a new directory in the asset structure.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 307 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 32,768,024 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| path | String | No | Path where the directory should be created |
| parentId | int32 | Yes | ID of the parent directory |

## Usage

This packet is sent to create a new directory within the asset hierarchy. The directory is created at the specified path and will appear in the asset browser.
