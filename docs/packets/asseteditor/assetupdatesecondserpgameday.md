---
sidebar_position: 54
---

# AssetUpdateSecondsPerGameDay

Updates the seconds per game day setting.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 353 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 8 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| secondsPerDay | float64 | No | Real-time seconds per in-game day |

## Usage

This packet adjusts how many real-time seconds correspond to one in-game day. It allows developers to speed up or slow down time progression for testing purposes.
