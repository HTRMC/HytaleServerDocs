---
sidebar_position: 2
---

# SetCreativeItem

Sets an item in the player's inventory while in creative mode.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 171 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Max Size** | 16384019 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| inventorySectionId | int (4 bytes) | No | Target inventory section identifier |
| slotId | int (4 bytes) | No | Target slot index within the section |
| item | ItemQuantity | No | The item and quantity to place |
| override | boolean (1 byte) | No | Whether to override existing item in slot |

## Usage

Sent by the client in creative mode to place an item directly into a specific inventory slot. The override flag determines whether an existing item in the slot should be replaced.
