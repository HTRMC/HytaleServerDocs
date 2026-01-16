---
sidebar_position: 10
---

# SetUpdateRate

Sets the server's update rate for the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 29 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 4 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| updatesPerSecond | int32 | No | Number of game updates per second |

## Usage

This packet is sent by the server to inform the client of the server's tick rate or update frequency. The client uses this value to synchronize its simulation with the server, ensuring smooth gameplay and accurate prediction. Common values might be 20 or 60 updates per second depending on the server configuration. This helps the client interpolate between server updates for smoother visual rendering.
