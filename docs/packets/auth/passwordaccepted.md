---
sidebar_position: 7
---

# PasswordAccepted

Confirmation that the password was accepted by the server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 16 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 0 bytes |

## Fields

This packet has no fields. It is an empty acknowledgment packet.

## Usage

This packet is sent by the server after the client submits a correct password via PasswordResponse. It serves as confirmation that the password authentication was successful and the client can now proceed to join the server. After receiving this packet, the client should expect to receive further setup packets for world data and player initialization.
