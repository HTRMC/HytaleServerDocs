---
sidebar_position: 22
---

# WorldSavingStatus

Indicates whether the world is currently being saved.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 233 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1 byte |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| isSaving | boolean | No | Whether the world is currently being saved |

## Usage

This packet is sent by the server to notify the client when a world save operation begins or ends. The client can use this information to display a saving indicator in the UI, preventing players from disconnecting during a save operation or providing feedback that their progress is being preserved.
