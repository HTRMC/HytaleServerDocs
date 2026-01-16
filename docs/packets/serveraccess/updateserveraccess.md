---
sidebar_position: 2
---

# UpdateServerAccess

Updates the client's server access permissions.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 251 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| accessData | byte[] | No | Serialized access permission data |

## Usage

Sent by the server to update the client with their current access level and permissions. The large max size suggests this may contain extensive permission configurations or access control lists.
