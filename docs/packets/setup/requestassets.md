---
sidebar_position: 4
---

# RequestAssets

Client request for specific assets from the server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 23 |
| **Direction** | Client to Server |
| **Compressed** | Yes |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| assets | Asset[] (max 4,096,000) | Yes | Array of assets being requested |

### Asset Structure

| Field | Type | Description |
|-------|------|-------------|
| hash | String (64 chars, ASCII) | Hash identifier for the asset |
| name | String (max 512 chars, UTF-8) | Name/path of the asset |

## Usage

This packet is sent by the client to request specific assets from the server. After receiving a WorldSettings packet with a list of required assets, the client checks which assets it does not have cached locally and sends this packet to request them. The server responds with AssetInitialize, AssetPart, and AssetFinalize packets to transfer the requested assets to the client.
