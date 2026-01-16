---
sidebar_position: 40
---

# AssetLastModifiedAssets

Response containing recently modified assets.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 339 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assets | byte[] | No | Compressed list of recently modified assets |

## Usage

This packet provides a list of assets that have been recently modified, sorted by modification time. Each entry includes the asset path and last modification timestamp.
