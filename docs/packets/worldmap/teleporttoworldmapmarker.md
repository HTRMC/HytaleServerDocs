---
sidebar_position: 5
---

# TeleportToWorldMapMarker

Requests teleportation to a specific map marker by its identifier.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 244 |
| **Direction** | Client to Server |
| **Compressed** | No |
| **Max Size** | 16,384,006 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| id | string (max 4,096,000) | Yes | Unique identifier of the marker to teleport to |

## Usage

This packet is sent by the client when the player requests teleportation to a map marker through the world map interface. The server must have enabled marker teleportation via the allowTeleportToMarkers setting in UpdateWorldMapSettings for this request to be valid. The server validates the request and, if permitted, teleports the player to the marker's location. Common use cases include fast travel to spawn points, discovered locations, or player-placed waypoints.
