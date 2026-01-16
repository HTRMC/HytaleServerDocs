---
sidebar_position: 4
---

# UpdateWorldMapVisible

Controls the visibility state of the world map interface on the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 243 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1 byte |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| visible | boolean | No | Whether the world map should be visible |

## Usage

This packet is sent by the server to show or hide the world map interface on the client. When visible is true, the map UI is displayed; when false, it is hidden. This allows the server to control when players can access the map, such as disabling it during cutscenes, specific game modes, or restricted areas. The visibility state is independent of the map's enabled state set in UpdateWorldMapSettings.
