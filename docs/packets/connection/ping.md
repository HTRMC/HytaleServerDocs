---
sidebar_position: 3
---

# Ping

Keepalive and latency measurement packet.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 2 |
| **Direction** | Bidirectional |
| **Compressed** | No |
| **Size** | 29 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| id | int (4 bytes) | No | Ping sequence identifier |
| time | InstantData | No | Timestamp of ping |
| lastPingValueRaw | int (4 bytes) | No | Raw ping measurement |
| lastPingValueDirect | int (4 bytes) | No | Direct ping measurement |
| lastPingValueTick | int (4 bytes) | No | Tick-based ping measurement |

## Usage

Sent periodically to maintain the connection and measure round-trip latency.
