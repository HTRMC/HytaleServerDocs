---
sidebar_position: 1
---

# RequestMachinimaActorModel

Requests actor model data for machinima playback.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 260 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Max Size** | 49,152,028 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| modelRequest | byte[] | No | Serialized model request parameters |

## Usage

Sent by the client to request actor model data needed for rendering machinima scenes. This may include character models, animations, or other visual assets required for cinematic playback.
