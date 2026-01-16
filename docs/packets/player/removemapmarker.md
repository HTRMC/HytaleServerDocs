---
sidebar_position: 20
---

# RemoveMapMarker

Requests removal of a map marker.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 119 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Max Size** | 16,384,006 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| markerData | Variable | No | Map marker identification data |

## Usage

Sent by the client to request removal of a map marker from the world map.
