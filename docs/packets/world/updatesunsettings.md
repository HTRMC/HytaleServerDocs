---
sidebar_position: 27
---

# UpdateSunSettings

Updates the sun's visual settings.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 360 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 8 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| heightPercentage | float | No | Sun height as a percentage (0.0 to 1.0) |
| angleRadians | float | No | Sun angle in radians |

## Usage

This packet is sent by the server to configure the sun's position and visual appearance. The heightPercentage controls how high the sun appears in the sky, while angleRadians determines its rotation angle. These settings affect lighting, shadows, and the overall visual atmosphere of the world. This is separate from the day/night time cycle and allows for custom sun positioning.
