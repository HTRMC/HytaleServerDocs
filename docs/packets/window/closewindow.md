---
sidebar_position: 3
---

# CloseWindow

Closes an open window on the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 202 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Size** | 4 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| id | int (4 bytes, LE) | No | Identifier of the window to close |

## Usage

Sent by the server to close a specific window on the client. The client should remove the window from display and clean up any associated state. The window ID must match an open window that was previously opened via the OpenWindow packet.
