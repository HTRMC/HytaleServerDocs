---
sidebar_position: 14
---

# ReticleEvent

Transmits reticle/crosshair interaction events.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 113 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 4 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| eventData | int (4 bytes) | No | Reticle event data |

## Usage

Sent by the client when reticle/crosshair events occur during gameplay.
