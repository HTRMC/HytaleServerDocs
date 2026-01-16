---
sidebar_position: 6
---

# AssetPart

Contains a chunk of asset data during transfer.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 25 |
| **Direction** | Server to Client |
| **Compressed** | Yes |
| **Max Size** | 4,096,006 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| part | byte[] (max 4,096,000) | Yes | Binary data chunk of the asset |

## Usage

This packet is sent by the server as part of an asset transfer sequence. Large assets are split into multiple parts, each sent in a separate AssetPart packet. The client reassembles these parts in order to reconstruct the complete asset data. The data is compressed to minimize bandwidth usage. This packet follows an AssetInitialize packet and precedes either more AssetPart packets or an AssetFinalize packet.
