---
sidebar_position: 11
---

# UpdateMovementSettings

Updates the player's movement configuration settings.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 110 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 252 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| movementSettings | byte[] (252 bytes) | No | Movement configuration data including speed, jump height, and other parameters |

## Usage

Sent by the client to update movement-related configuration settings.
