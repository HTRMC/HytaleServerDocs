---
sidebar_position: 35
---

# AssetRequestDatasetReply

Response containing the requested dataset.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 334 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| requestId | int32 | No | ID of the original request |
| datasetId | String | No | ID of the dataset |
| data | byte[] | No | Compressed dataset content |

## Usage

This packet provides the requested dataset to the editor. The data is compressed and formatted according to the dataset type specification.
