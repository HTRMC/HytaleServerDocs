---
sidebar_position: 9
---

# ClientMovement

Transmits player movement data to the server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 108 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 153 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| movementStates | short (2 bytes) | No | Bitfield of current movement states |
| relativePosition | Vector3 | No | Position relative to current chunk |
| absolutePosition | Vector3 | No | Absolute world position |
| bodyOrientation | Quaternion | No | Body rotation orientation |
| lookOrientation | Quaternion | No | Camera/head look orientation |
| teleportAck | int (4 bytes) | No | Teleport acknowledgment counter |
| wishMovement | Vector3 | No | Desired movement direction |
| velocity | Vector3 | No | Current velocity vector |
| mountedTo | int (4 bytes) | No | Entity ID of mount (0 if not mounted) |
| riderMovementStates | short (2 bytes) | No | Movement states when riding |

## Usage

Sent by the client every tick to update the server with the player's current position, orientation, and movement state.
