---
sidebar_position: 28
---

# UpdatePostFxSettings

Updates post-processing visual effects settings.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 361 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 20 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| globalIntensity | float | No | Overall intensity of post-processing effects |
| power | float | No | Power/strength setting for effects |
| sunshaftScale | float | No | Scale of sunshaft (god rays) effect |
| sunIntensity | float | No | Intensity of sun-related effects |
| sunshaftIntensity | float | No | Intensity of sunshaft (god rays) effect |

## Usage

This packet is sent by the server to configure visual post-processing effects. These settings control various screen effects including god rays (sunshafts), bloom, and other atmospheric rendering effects. This allows servers to customize the visual atmosphere for different areas, weather conditions, or special events.
