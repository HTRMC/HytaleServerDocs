---
sidebar_position: 13
---

# ViewRadius

Sets the view/render distance for the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 32 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 4 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| value | int32 | No | View radius in chunks |

## Usage

This packet is sent by the server to set the client's view radius, which determines how far the player can see in the world. The value is specified in chunks and affects how many chunks the server will send to the client. A larger value means the player can see farther but requires more bandwidth and processing power. The server may adjust this value based on server load or player settings.
