---
sidebar_position: 10
---

# ClientTeleport

Confirms a teleport operation from the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 109 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 52 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| teleportData | byte[] (52 bytes) | No | Teleport confirmation data including position and acknowledgment |

## Usage

Sent by the client to confirm a server-initiated teleport has been processed.
