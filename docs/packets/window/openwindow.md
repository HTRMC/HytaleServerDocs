---
sidebar_position: 1
---

# OpenWindow

Opens a UI window on the client with associated data and inventory contents.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 200 |
| **Direction** | Server → Client |
| **Compressed** | Yes |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| id | int (4 bytes, LE) | No | Unique identifier for this window instance |
| windowType | WindowType (byte enum) | No | Type of window to open |
| windowData | String (max 4,096,000 chars, UTF-8) | Yes | JSON data for window configuration |
| inventory | InventorySection | Yes | Inventory contents to display in the window |
| extraResources | ExtraResources | Yes | Additional resources required by the window |

## WindowType Enum

| Value | Name | Description |
|-------|------|-------------|
| 0 | Container | Generic container window |
| 1 | BasicCrafting | Simple crafting interface |
| 2 | StructuralCrafting | Advanced structural crafting |
| 3 | DiagramCrafting | Diagram-based crafting |
| 4 | Processing | Processing bench interface |
| 5 | PocketCrafting | Field/pocket crafting menu |
| 6 | Memories | Memories collection window |

## Usage

Sent by the server to open a window on the client. The window can contain inventory items, crafting interfaces, or other UI elements. The `windowData` field contains JSON configuration specific to the window type.
