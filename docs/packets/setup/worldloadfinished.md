---
sidebar_position: 3
---

# WorldLoadFinished

Signals that world loading has completed.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 22 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 0 bytes |

## Fields

This packet has no fields.

## Usage

This packet is sent by the server to notify the client that the world loading process has completed successfully. Upon receiving this packet, the client can transition from the loading screen to the gameplay view. It acts as a signal that all necessary world data and assets have been transferred and the client is ready to begin rendering the world and accepting player input.
