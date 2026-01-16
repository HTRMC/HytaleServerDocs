---
sidebar_position: 17
---

# UpdateEditorWeatherOverride

Sets an editor weather override for development/testing.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 150 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 4 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| weatherIndex | int32 | No | Index of the weather type to override to |

## Usage

This packet is sent by the server to override the normal weather display in editor mode. It allows content creators to preview specific weather conditions without affecting the actual world weather state. This is useful for testing how content looks under different weather conditions.
