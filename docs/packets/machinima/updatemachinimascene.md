---
sidebar_position: 3
---

# UpdateMachinimaScene

Updates the machinima scene configuration.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 262 |
| **Direction** | Server → Client |
| **Compressed** | Yes |
| **Max Size** | 36,864,033 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| sceneData | byte[] (compressed) | No | Compressed scene configuration data |

## Usage

Sent by the server to update the client with machinima scene configuration. The compressed data includes scene setup, actor positions, camera paths, lighting, and other cinematic elements needed for machinima playback.
