---
sidebar_position: 8
---

# RemoveAssets

Instructs the client to remove specified assets.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 27 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| asset | Asset[] (max 4,096,000) | Yes | Array of assets to remove |

### Asset Structure

| Field | Type | Description |
|-------|------|-------------|
| hash | String (64 chars, ASCII) | Hash identifier for the asset |
| name | String (max 512 chars, UTF-8) | Name/path of the asset |

## Usage

This packet is sent by the server to instruct the client to unload or remove specific assets from memory. This is useful when transitioning between worlds or areas that require different asset sets, or when assets have been updated and need to be reloaded. The client should release the specified assets from memory and potentially from the local cache if instructed.
