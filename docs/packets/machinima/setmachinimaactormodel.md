---
sidebar_position: 2
---

# SetMachinimaActorModel

Provides actor model data for machinima playback.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 261 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| modelData | byte[] | No | Serialized actor model data |

## Usage

Sent by the server in response to a model request, containing the actor model data needed for machinima rendering. The large max size accommodates detailed model information including geometry, textures, and animation data.
