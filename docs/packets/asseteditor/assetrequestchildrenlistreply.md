---
sidebar_position: 23
---

# AssetRequestChildrenListReply

Response containing the list of children.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 322 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| requestId | int32 | No | ID of the original request |
| parentPath | String | No | Path of the queried parent |
| children | byte[] | No | Compressed list of child entries |

## Usage

This packet responds to a children list request with the list of child assets and directories. Each child entry includes basic metadata for display in the asset browser.
