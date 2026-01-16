---
sidebar_position: 55
---

# AssetUpdateWeatherPreviewLock

Locks or unlocks the weather preview setting.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 354 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 1 byte |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| locked | boolean | No | Whether weather preview is locked |

## Usage

This packet controls whether the weather preview is locked to a specific state. When locked, weather will not change automatically, allowing developers to preview assets under specific weather conditions.
