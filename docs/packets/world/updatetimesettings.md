---
sidebar_position: 12
---

# UpdateTimeSettings

Updates the world time configuration settings.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 145 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 10 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| daytimeDurationSeconds | int32 | No | Duration of daytime in real seconds |
| nighttimeDurationSeconds | int32 | No | Duration of nighttime in real seconds |
| totalMoonPhases | byte | No | Total number of moon phases in a lunar cycle |
| timePaused | boolean | No | Whether time progression is paused |

## Usage

This packet is sent by the server to configure the world's day/night cycle settings. It defines how long daytime and nighttime last in real-world seconds, the number of moon phases, and whether time progression is currently paused. These settings affect lighting, mob spawning, and other time-dependent game mechanics.
