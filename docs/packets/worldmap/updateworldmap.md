---
sidebar_position: 2
---

# UpdateWorldMap

Sends world map data updates including chunk imagery and marker changes to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 241 |
| **Direction** | Server to Client |
| **Compressed** | Yes |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| chunks | MapChunk[] (max 4,096,000) | Yes | Array of map chunk data to add or update |
| addedMarkers | MapMarker[] (max 4,096,000) | Yes | Array of markers to add to the map |
| removedMarkers | string[] (max 4,096,000) | Yes | Array of marker IDs to remove from the map |

### MapChunk Structure

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| chunkX | int32 | No | X coordinate of the map chunk |
| chunkZ | int32 | No | Z coordinate of the map chunk |
| image | MapImage | Yes | Image data for the chunk |

### MapMarker Structure

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| id | string (max 4,096,000) | Yes | Unique identifier for the marker |
| name | string (max 4,096,000) | Yes | Display name of the marker |
| markerImage | string (max 4,096,000) | Yes | Image asset reference for the marker icon |
| transform | Transform | Yes | Position and orientation of the marker |
| contextMenuItems | ContextMenuItem[] (max 4,096,000) | Yes | Available context menu actions for the marker |

## Usage

This packet is sent by the server to update the client's world map with new terrain imagery, add markers for points of interest, or remove obsolete markers. The data is compressed due to its potentially large size. Map chunks contain rendered imagery of the terrain, while markers represent interactive points such as spawn locations, player positions, objectives, or custom waypoints. This packet supports incremental updates, allowing the server to send only changed data rather than the entire map.
