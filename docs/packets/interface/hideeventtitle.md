---
sidebar_position: 6
---

# HideEventTitle

Immediately hides any currently displayed event title.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 215 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 4 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| immediate | boolean | No | Whether to skip fade out animation |

## Usage

This packet is sent by the server to force-hide any event title currently being displayed on the client's screen. This is useful when an event ends prematurely or when the server needs to clear the title display for other UI elements.
