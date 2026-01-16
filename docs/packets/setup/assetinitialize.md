---
sidebar_position: 5
---

# AssetInitialize

Initiates the transfer of an asset to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 24 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 2,121 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| asset | Asset | No | The asset being transferred |
| size | int32 | No | Total size of the asset data in bytes |

### Asset Structure

| Field | Type | Description |
|-------|------|-------------|
| hash | String (64 chars, ASCII) | Hash identifier for the asset |
| name | String (max 512 chars, UTF-8) | Name/path of the asset |

## Usage

This packet is sent by the server to begin transferring an asset to the client. It contains metadata about the asset including its identifier and the total size of the data that will follow. After this packet, the server sends one or more AssetPart packets containing the actual asset data, followed by an AssetFinalize packet to signal completion. This allows the client to allocate appropriate buffers and track transfer progress.
