---
sidebar_position: 11
---

# EditorBlocksChange

Sends editor block modification data to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 222 |
| **Direction** | Server to Client |
| **Compressed** | Yes |
| **Max Size** | 139,264,048 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| blocksData | byte[] | No | Compressed data representing block changes in the editor |

## Usage

This packet is sent by the server to synchronize block changes made in the editor mode. It contains compressed data representing modifications to blocks, used when multiple editors are working on the same world or when the server needs to broadcast editor changes to connected clients.
