---
sidebar_position: 4
---

# SmartGiveCreativeItem

Intelligently gives an item to the player in creative mode using smart placement logic.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 173 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Max Size** | 16384011 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| item | ItemQuantity | No | The item and quantity to give |
| moveType | SmartMoveType (1 byte) | No | Strategy for placing the item |

## SmartMoveType Values

The moveType field determines how the item is placed:
- **EquipOrMergeStack** - Equip the item or merge with existing stacks

## Usage

Sent by the client in creative mode to intelligently place an item in the inventory. The server determines the best slot based on the move type strategy.
