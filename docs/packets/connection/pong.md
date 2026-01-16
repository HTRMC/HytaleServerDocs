---
sidebar_position: 4
---

# Pong

Response to a Ping packet.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 3 |
| **Direction** | Bidirectional |
| **Compressed** | No |
| **Size** | 20 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| (echo) | - | - | Echo response data from Ping |

## Usage

Sent in response to a Ping packet, echoing the data to complete the round-trip measurement.
