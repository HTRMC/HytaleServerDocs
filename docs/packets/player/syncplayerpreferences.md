---
sidebar_position: 17
---

# SyncPlayerPreferences

Synchronizes player preference settings.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 116 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 8 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| preferences | long (8 bytes) | No | Player preference flags and settings |

## Usage

Sent by the client to synchronize player preferences with the server.
