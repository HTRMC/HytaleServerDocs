---
sidebar_position: 9
---

# AssetEdiorDeleteDirectory

Deletes a directory from the asset structure.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 308 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 32,768,024 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| path | String | No | Path of the directory to delete |
| recursive | boolean | No | Whether to delete contents recursively |

## Usage

This packet is sent to delete a directory from the asset hierarchy. If recursive is true, all contents within the directory will also be deleted.
