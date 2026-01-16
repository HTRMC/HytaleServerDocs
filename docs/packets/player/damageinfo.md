---
sidebar_position: 13
---

# DamageInfo

Transmits damage information data.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 112 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Max Size** | 32,768,048 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| damageData | Variable | No | Damage event information |

## Usage

Sent by the client to report damage events and related information.
