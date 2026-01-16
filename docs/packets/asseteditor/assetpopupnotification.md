---
sidebar_position: 38
---

# AssetPopupNotification

Displays a popup notification in the editor.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 337 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| title | String | No | Notification title |
| message | String | No | Notification message |
| type | byte | No | Notification type (info, warning, error) |
| duration | int32 | No | Display duration in milliseconds |

## Usage

This packet triggers a popup notification in the editor UI. Notifications are used to inform the user about operation results, warnings, or errors.
