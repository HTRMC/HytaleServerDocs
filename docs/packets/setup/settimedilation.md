---
sidebar_position: 11
---

# SetTimeDilation

Sets the time dilation factor for the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 30 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 4 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| timeDilation | float32 | No | Time dilation multiplier |

## Usage

This packet is sent by the server to adjust the passage of time on the client. A value of 1.0 represents normal time, values less than 1.0 slow time down, and values greater than 1.0 speed time up. This can be used for slow-motion effects, fast-forwarding, or debugging purposes. The client applies this multiplier to its local simulation to match the server's time progression.
