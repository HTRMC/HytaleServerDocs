---
sidebar_position: 15
---

# ClearEditorTimeOverride

Clears the editor time override.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 148 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 0 bytes |

## Fields

This packet has no fields.

## Usage

This packet is sent by the server to clear any previously set editor time override, returning the client to display the actual world time. It is used when exiting editor preview mode or when the time override is no longer needed.
