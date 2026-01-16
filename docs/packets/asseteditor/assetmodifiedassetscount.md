---
sidebar_position: 41
---

# AssetModifiedAssetsCount

Reports the count of modified assets.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 340 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 4 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| count | int32 | No | Number of modified assets |

## Usage

This packet reports the current count of assets with unsaved changes. It is used to update the UI indicator showing how many files need to be saved.
