---
sidebar_position: 7
---

# SmartMoveItemStack

Intelligently moves items from an inventory slot using smart placement logic.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 176 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 13 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| fromSectionId | int (4 bytes) | No | Source inventory section identifier |
| fromSlotId | int (4 bytes) | No | Source slot index |
| quantity | int (4 bytes) | No | Number of items to move |
| moveType | SmartMoveType (1 byte) | No | Strategy for placing the item |

## SmartMoveType Values

The moveType field determines how the item is placed:
- **EquipOrMergeStack** - Equip the item or merge with existing stacks

## Usage

Sent by the client to move items from a slot using intelligent placement. The server determines the best destination slot based on the move type strategy, such as auto-equipping armor or merging with existing stacks.
