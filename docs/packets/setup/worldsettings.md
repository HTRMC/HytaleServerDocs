---
sidebar_position: 1
---

# WorldSettings

Sends world configuration settings to the client during world setup.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 20 |
| **Direction** | Server to Client |
| **Compressed** | Yes |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| worldHeight | int32 | No | The maximum height of the world in blocks |
| requiredAssets | Asset[] (max 4,096,000) | Yes | Array of assets required for the world |

### Asset Structure

| Field | Type | Description |
|-------|------|-------------|
| hash | String (64 chars, ASCII) | Hash identifier for the asset |
| name | String (max 512 chars, UTF-8) | Name/path of the asset |

## Usage

This packet is sent by the server to the client during the world loading process. It contains the world's height configuration and a list of required assets that the client needs to load or request from the server. The client uses this information to prepare for world rendering and to determine which assets need to be downloaded.
