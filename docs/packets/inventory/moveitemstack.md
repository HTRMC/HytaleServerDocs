---
sidebar_position: 6
---

# MoveItemStack

Moves a specified quantity of items from one inventory slot to another.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 175 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 20 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| fromSectionId | int (4 bytes) | No | Source inventory section identifier |
| fromSlotId | int (4 bytes) | No | Source slot index |
| quantity | int (4 bytes) | No | Number of items to move |
| toSectionId | int (4 bytes) | No | Destination inventory section identifier |
| toSlotId | int (4 bytes) | No | Destination slot index |

## Usage

Sent by the client to move items between inventory slots. This allows moving items within the same section or across different inventory sections.
