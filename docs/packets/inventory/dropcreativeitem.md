---
sidebar_position: 3
---

# DropCreativeItem

Drops an item from creative mode into the world.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 172 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Max Size** | 16384010 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| item | ItemQuantity | No | The item and quantity to drop into the world |

## Usage

Sent by the client in creative mode to spawn an item entity in the world without taking it from an inventory slot.
