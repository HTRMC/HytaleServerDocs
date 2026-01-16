---
sidebar_position: 16
---

# UpdateWeather

Updates the current weather state.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 149 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 8 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| weatherIndex | int32 | No | Index of the weather type to display |
| transitionSeconds | float | No | Duration of the weather transition in seconds |

## Usage

This packet is sent by the server to change the current weather conditions. The weatherIndex references a weather type defined in the game's weather assets (clear, rain, storm, snow, etc.). The transitionSeconds field specifies how long the transition from the current weather to the new weather should take, allowing for smooth weather changes.
