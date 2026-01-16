---
sidebar_position: 6
---

# ClientReady

Signals that the client is ready to receive game data.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 105 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 2 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| readyState | short (2 bytes) | No | Client ready state flags |

## Usage

Sent by the client after completing initialization to signal readiness for game data.
