---
sidebar_position: 1
---

# RequestServerAccess

Requests access level information from the server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 250 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 3 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| accessType | byte | No | Type of access being requested |
| flags | short | No | Request flags or parameters |

## Usage

Sent by the client to request information about their server access level or permissions.
