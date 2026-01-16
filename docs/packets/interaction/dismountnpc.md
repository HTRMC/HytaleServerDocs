---
sidebar_position: 5
---

# DismountNpc

Requests to dismount from the currently mounted NPC.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 294 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 0 bytes (empty) |

## Fields

This packet has no fields.

## Usage

Sent by the client to request dismounting from their currently mounted NPC. The server handles the dismount logic and places the player at an appropriate position.
