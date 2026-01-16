---
sidebar_position: 34
---

# AssetRequestDataset

Requests a dataset for the editor.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 333 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| datasetId | String | No | ID of the dataset to request |
| requestId | int32 | No | ID for tracking the request |
| filters | byte[] | Yes | Optional filters to apply |

## Usage

This packet requests a dataset for use in the editor. Datasets can include lists of available items, blocks, entities, or other game data used for selection UI or validation.
