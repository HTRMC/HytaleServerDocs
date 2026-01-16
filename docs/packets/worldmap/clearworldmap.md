---
sidebar_position: 3
---

# ClearWorldMap

Clears all world map data on the client, removing all chunks and markers.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 242 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 0 bytes |

## Fields

This packet has no fields.

## Usage

This packet is sent by the server to clear the client's entire world map, removing all previously loaded chunk imagery and markers. It is typically used when a player changes worlds, the map needs to be reset due to significant world changes, or when the server wants to force a complete map refresh. After receiving this packet, the client should have an empty map until new data is sent via UpdateWorldMap packets.
