---
sidebar_position: 9
---

# RequestCommonAssetsRebuild

Client request to rebuild common assets.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 28 |
| **Direction** | Client to Server |
| **Compressed** | No |
| **Max Size** | 0 bytes |

## Fields

This packet has no fields.

## Usage

This packet is sent by the client to request that the server rebuild and resend common assets. This may be used when the client detects asset corruption, when assets need to be refreshed, or in editor mode when asset changes need to be synchronized. The server responds by re-sending the necessary asset data through the standard asset transfer mechanism.
