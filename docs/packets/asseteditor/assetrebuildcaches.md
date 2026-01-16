---
sidebar_position: 49
---

# AssetRebuildCaches

Triggers a rebuild of asset caches.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 348 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 5 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| cacheFlags | int32 | No | Bit flags indicating which caches to rebuild |
| force | boolean | No | Whether to force rebuild even if cache is valid |

## Usage

This packet triggers a rebuild of various asset caches. Cache rebuilding ensures that cached data is synchronized with the current asset state and can resolve inconsistencies.
