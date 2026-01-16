---
sidebar_position: 6
---

# TeleportToWorldMapPosition

Requests teleportation to a specific coordinate position on the world map.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 245 |
| **Direction** | Client to Server |
| **Compressed** | No |
| **Max Size** | 8 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int32 | No | Target X coordinate on the map |
| y | int32 | No | Target Y coordinate on the map (represents Z in world space) |

## Usage

This packet is sent by the client when the player clicks on a position on the world map to request teleportation to that location. The server must have enabled coordinate teleportation via the allowTeleportToCoordinates setting in UpdateWorldMapSettings for this request to be valid. The server validates the request and, if permitted, teleports the player to the specified world coordinates. The Y field in this packet corresponds to the Z axis in world space, as the map displays a top-down view.
