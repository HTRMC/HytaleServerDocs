---
sidebar_position: 10
---

# CustomPageEvent

Sends a custom page interaction event from the client to the server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 219 |
| **Direction** | Client to Server |
| **Compressed** | No |
| **Max Size** | 16,384,007 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| pageId | int32 | No | The page that triggered the event |
| eventType | byte | No | Type of interaction event |
| elementId | String | No | Identifier of the UI element interacted with |
| eventData | byte[] | Yes | Additional event-specific data |

## Usage

This packet is sent by the client to notify the server of user interactions with custom UI pages. When a player clicks buttons, submits forms, or otherwise interacts with server-defined custom interfaces, this packet carries those events back to the server for processing.
