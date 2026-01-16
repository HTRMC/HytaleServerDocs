---
sidebar_position: 1
---

# SetClientId

Sets the unique client identifier for the connected player.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 100 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Size** | 4 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| clientId | int (4 bytes) | No | Unique identifier assigned to this client |

## Usage

Sent by the server to assign a unique client ID to the player after connection is established.
