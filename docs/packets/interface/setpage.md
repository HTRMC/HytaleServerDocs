---
sidebar_position: 7
---

# SetPage

Instructs the client to display a specific UI page.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 216 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 2 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| pageId | int16 | No | The identifier of the page to display |

## Usage

This packet is sent by the server to switch the client's active UI page. Pages represent different screens or menus in the game interface, such as inventory, settings, or custom game-specific interfaces. The client will transition to the specified page upon receiving this packet.
