---
sidebar_position: 10
---

# InventoryAction

Performs a generic inventory action on a specific inventory section.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 179 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 6 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| inventorySectionId | int (4 bytes) | No | Target inventory section identifier |
| inventoryActionType | InventoryActionType (1 byte) | No | Type of action to perform |
| actionData | byte (1 byte) | No | Additional data for the action |

## InventoryActionType Values

The inventoryActionType field specifies the action:
- **TakeAll** - Take all items from the section

## Usage

Sent by the client to perform a generic inventory action such as taking all items from a section. The actionData field provides additional context depending on the action type.
