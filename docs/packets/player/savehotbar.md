---
sidebar_position: 8
---

# SaveHotbar

Requests to save the current hotbar configuration.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 107 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 1 byte (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| hotbarSlot | byte | No | The hotbar configuration slot to save to (0-based index) |

## Usage

Sent by the client to save the current hotbar layout to a specified slot.
