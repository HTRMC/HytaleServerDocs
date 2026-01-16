---
sidebar_position: 3
---

# Notification

Displays a notification popup to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 212 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| content | String | No | The notification text content |
| type | byte | No | The type/category of notification |
| duration | int32 | Yes | How long the notification should display (milliseconds) |

## Usage

This packet is sent by the server to show notification popups to the player. Notifications are typically used for achievements, quest updates, item pickups, or other momentary information that should be displayed without interrupting gameplay.
