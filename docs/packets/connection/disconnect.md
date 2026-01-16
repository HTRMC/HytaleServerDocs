---
sidebar_position: 2
---

# Disconnect

Terminates the connection between client and server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 1 |
| **Direction** | Bidirectional |
| **Compressed** | No |
| **Max Size** | 16,384,007 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| reason | Variable | Yes | Disconnect reason/state information |

## Usage

Sent by either client or server to gracefully terminate the connection. Contains optional reason information.
