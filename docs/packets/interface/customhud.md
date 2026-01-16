---
sidebar_position: 8
---

# CustomHUD

Sends custom HUD configuration data to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 217 |
| **Direction** | Server to Client |
| **Compressed** | Yes |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| hudData | byte[] | No | Compressed custom HUD definition data |

## Usage

This packet is sent by the server to configure custom HUD elements on the client. Custom HUDs allow servers to create unique interface elements beyond the standard game UI, enabling custom health bars, scoreboards, objective trackers, and other game-specific interface components. The data is compressed due to its potentially large size.
