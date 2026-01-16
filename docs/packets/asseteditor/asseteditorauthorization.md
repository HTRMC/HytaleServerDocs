---
sidebar_position: 4
---

# AssetEditorAuthorization

Checks authorization status for asset editor access.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 303 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 1 byte |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| authorized | boolean | No | Whether the client is authorized to use the editor |

## Usage

This packet is used to verify that the client has permission to access the asset editor. The server sends this to confirm or deny editor access based on the client's authorization level.
