---
sidebar_position: 20
---

# ResetUserInterfaceState

Resets the client's user interface to its default state.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 231 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 0 bytes |

## Fields

This packet has no fields.

## Usage

This packet is sent by the server to reset all user interface elements on the client to their default state. This clears any custom HUDs, custom pages, visibility overrides, and other UI modifications, returning the interface to its baseline configuration. This is typically used when changing game modes or after significant state transitions.
