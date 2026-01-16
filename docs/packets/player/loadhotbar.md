---
sidebar_position: 7
---

# LoadHotbar

Requests to load a saved hotbar configuration.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 106 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 1 byte (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| hotbarSlot | byte | No | The hotbar configuration slot to load (0-based index) |

## Usage

Sent by the client to request loading a previously saved hotbar configuration.
