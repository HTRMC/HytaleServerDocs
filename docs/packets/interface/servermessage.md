---
sidebar_position: 1
---

# ServerMessage

Displays a server message to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 210 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| message | String | No | The server message content to display |

## Usage

This packet is sent by the server to display a system message to the client. Server messages are typically used for announcements, system notifications, or administrative messages that need to be displayed prominently to the player.
