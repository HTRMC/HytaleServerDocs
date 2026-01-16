---
sidebar_position: 5
---

# DropItemStack

Drops a specified quantity of items from an inventory slot into the world.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 174 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 12 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| inventorySectionId | int (4 bytes) | No | Source inventory section identifier |
| slotId | int (4 bytes) | No | Source slot index within the section |
| quantity | int (4 bytes) | No | Number of items to drop from the stack |

## Usage

Sent by the client to drop items from a specific inventory slot. The quantity specifies how many items from the stack should be dropped as an item entity in the world.
