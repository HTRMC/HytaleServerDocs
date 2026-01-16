---
sidebar_position: 48
---

# AssetExportComplete

Signals that an export operation is complete.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 347 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| exportedCount | int32 | No | Number of assets exported |
| deletedCount | int32 | No | Number of assets deleted |
| success | boolean | No | Whether the export completed successfully |

## Usage

This packet signals that the entire export operation has completed. It provides a summary of the export including counts of exported and deleted assets.
