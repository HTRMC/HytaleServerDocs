---
sidebar_position: 1
---

# UpdatePlayerInventory

Sends the complete player inventory state to the client, including all inventory sections.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 170 |
| **Direction** | Server → Client |
| **Compressed** | Yes |
| **Max Size** | 1677721600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| storage | InventorySection | Yes | Main storage inventory section |
| armor | InventorySection | Yes | Armor equipment slots |
| hotbar | InventorySection | Yes | Hotbar inventory section |
| utility | InventorySection | Yes | Utility items section |
| builderMaterial | InventorySection | Yes | Builder mode materials section |
| tools | InventorySection | Yes | Tools inventory section |
| backpack | InventorySection | Yes | Backpack storage section |
| sortType | SortType (1 byte) | No | Current inventory sort type |

## Related Types

### InventorySection

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| items | Map&lt;int, ItemWithAllMetadata&gt; | Yes | Dictionary mapping slot index to item data |
| capacity | short (2 bytes) | No | Maximum capacity of this section |

## Usage

Sent by the server to synchronize the complete inventory state with the client. Each inventory section can be individually included or omitted based on what needs to be updated.
