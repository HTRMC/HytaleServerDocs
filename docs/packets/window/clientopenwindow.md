---
sidebar_position: 5
---

# ClientOpenWindow

Client request to open a specific type of window.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 204 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 1 byte (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| type | WindowType (byte enum) | No | Type of window to open |

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

Sent by the client to request opening a specific type of window. Only certain window types can be requested by the client (such as PocketCrafting and Memories). The server validates the request and responds with an OpenWindow packet if the request is allowed.
