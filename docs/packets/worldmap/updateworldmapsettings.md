---
sidebar_position: 1
---

# UpdateWorldMapSettings

Configures the world map settings including biome data, teleport permissions, and zoom scale parameters.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 240 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| enabled | boolean | No | Whether the world map is enabled |
| biomeDataMap | `Map<int16, BiomeData>` (max 4,096,000 entries) | Yes | Dictionary mapping biome IDs to biome display data |
| allowTeleportToCoordinates | boolean | No | Whether players can teleport to arbitrary map coordinates |
| allowTeleportToMarkers | boolean | No | Whether players can teleport to map markers |
| defaultScale | float32 | No | Default zoom scale for the map (default: 32.0) |
| minScale | float32 | No | Minimum zoom scale allowed (default: 2.0) |
| maxScale | float32 | No | Maximum zoom scale allowed (default: 256.0) |

### BiomeData Structure

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| zoneId | int32 | No | Unique identifier for the zone |
| zoneName | string (max 4,096,000) | Yes | Display name of the zone |
| biomeName | string (max 4,096,000) | Yes | Display name of the biome |
| biomeColor | int32 | No | Color value for the biome on the map |

## Usage

This packet is sent by the server to configure the client's world map interface. It defines whether the map feature is enabled, provides biome metadata for rendering, and sets teleportation permissions. The scale parameters control the zoom behavior of the map, allowing servers to customize the viewing experience. This packet is typically sent when a player joins a world or when map settings need to be updated.
