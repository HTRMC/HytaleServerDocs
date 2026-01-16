---
sidebar_position: 2
---

# UpdateWindow

Updates the contents or data of an already open window.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 201 |
| **Direction** | Server → Client |
| **Compressed** | Yes |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| id | int (4 bytes, LE) | No | Identifier of the window to update |
| windowData | String (max 4,096,000 chars, UTF-8) | Yes | Updated JSON data for window configuration |
| inventory | InventorySection | Yes | Updated inventory contents |
| extraResources | ExtraResources | Yes | Updated additional resources |

## Usage

Sent by the server to update the state of an existing open window. Only the fields that need updating will be populated; null fields indicate no change. This allows for efficient partial updates without resending the entire window state.
