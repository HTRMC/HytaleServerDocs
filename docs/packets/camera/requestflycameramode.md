---
sidebar_position: 3
---

# RequestFlyCameraMode

Requests to toggle fly camera mode.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 282 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 1 byte (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| enable | boolean | No | Whether to enable or disable fly camera mode |

## Usage

Sent by the client to request enabling or disabling fly camera mode. The server will validate the request based on the player's permissions before responding with a SetFlyCameraMode packet.
