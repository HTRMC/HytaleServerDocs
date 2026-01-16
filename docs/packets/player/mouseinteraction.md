---
sidebar_position: 12
---

# MouseInteraction

Transmits mouse click and interaction events.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 111 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Max Size** | 20,480,071 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| interactionData | Variable | No | Mouse interaction event data |

## Usage

Sent by the client when the player performs mouse click interactions in the game world.
