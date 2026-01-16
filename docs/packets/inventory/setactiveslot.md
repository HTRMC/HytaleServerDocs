---
sidebar_position: 8
---

# SetActiveSlot

Sets the currently active (selected) slot in an inventory section.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 177 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 8 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| inventorySectionId | int (4 bytes) | No | Target inventory section identifier |
| activeSlot | int (4 bytes) | No | Slot index to set as active |

## Usage

Sent by the client to change the currently selected slot, typically in the hotbar. This determines which item the player is holding and can use.
