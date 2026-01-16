---
sidebar_position: 53
---

# AssetSetGameTime

Sets the game time for preview purposes.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 352 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 14 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| timeOfDay | float64 | No | Time of day value (0.0-1.0) |
| dayNumber | int32 | No | Current day number |
| locked | boolean | No | Whether time progression is locked |

## Usage

This packet sets the game time in the editor preview. It allows developers to preview how assets appear at different times of day without waiting for time to pass naturally.
