---
sidebar_position: 22
---

# AssetRequestChildrenList

Requests the list of children for an asset or directory.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 321 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| parentPath | String | No | Path of the parent to query |
| requestId | int32 | No | ID for tracking the request |
| recursive | boolean | No | Whether to include nested children |

## Usage

This packet requests a list of child assets or subdirectories within a specified parent. It is used for lazy-loading the asset tree in the editor.
