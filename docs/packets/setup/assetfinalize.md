---
sidebar_position: 7
---

# AssetFinalize

Signals completion of an asset transfer.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 26 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 0 bytes |

## Fields

This packet has no fields.

## Usage

This packet is sent by the server to signal that an asset transfer has completed. It follows one or more AssetPart packets and indicates that the client has received all data for the current asset. Upon receiving this packet, the client can finalize the asset, verify its integrity using the hash provided in the AssetInitialize packet, and store it in the local cache for future use.
