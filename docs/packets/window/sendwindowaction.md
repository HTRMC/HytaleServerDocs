---
sidebar_position: 4
---

# SendWindowAction

Sends a window action from the client to the server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 203 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Max Size** | 32,768,027 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| id | int (4 bytes, LE) | No | Identifier of the target window |
| action | WindowAction (polymorphic) | No | The action to perform |

## WindowAction Types

The `action` field is a polymorphic type with a VarInt type ID prefix:

| Type ID | Class | Description |
|---------|-------|-------------|
| 0 | CraftRecipeAction | Craft a specific recipe |
| 1 | TierUpgradeAction | Upgrade item tier |
| 2 | SelectSlotAction | Select a slot in the window |
| 3 | ChangeBlockAction | Change a block in the window |
| 4 | SetActiveAction | Set the active element |
| 5 | CraftItemAction | Craft an item |
| 6 | UpdateCategoryAction | Update the selected category |
| 7 | CancelCraftingAction | Cancel an ongoing craft |
| 8 | SortItemsAction | Sort items in the window |

## Usage

Sent by the client when the player performs an action within an open window, such as crafting an item, selecting a slot, or sorting inventory contents. The server validates the action and updates the window state accordingly.
