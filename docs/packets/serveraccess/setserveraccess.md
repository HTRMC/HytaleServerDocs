---
sidebar_position: 3
---

# SetServerAccess

Sets or modifies server access permissions.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 252 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Max Size** | 16,384,007 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| accessConfiguration | byte[] | No | Serialized access configuration data |

## Usage

Sent by the client to set or modify server access permissions. Typically used by administrators or authorized users to configure access control settings.
