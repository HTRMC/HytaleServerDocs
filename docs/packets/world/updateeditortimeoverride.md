---
sidebar_position: 14
---

# UpdateEditorTimeOverride

Sets an editor time override for development/testing.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 147 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 14 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| gameTime | InstantData (12 bytes) | Yes | Override time to display |
| paused | boolean | No | Whether time progression should be paused |

### InstantData Structure

InstantData contains timestamp information representing the overridden in-game time.

## Usage

This packet is sent by the server to override the normal time display in editor mode. It allows content creators to set a specific time of day for testing lighting, environmental effects, and other time-dependent features without affecting the actual world time. The paused flag can freeze time at the specified value.
