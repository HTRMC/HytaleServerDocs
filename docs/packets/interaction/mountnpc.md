---
sidebar_position: 4
---

# MountNpc

Requests to mount an NPC entity.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 293 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 16 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| npcId | long | No | Unique identifier of the NPC to mount |
| seatIndex | int | No | Index of the seat position on the NPC |
| flags | int | No | Mount request flags or options |

## Usage

Sent by the client to request mounting an NPC entity such as a vehicle, mount, or rideable creature. The server validates the request and updates the player's mount state accordingly.
