---
sidebar_position: 3
---

# PlayInteractionFor

Triggers an interaction to play for specified targets.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 292 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Max Size** | 16,385,065 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| interactionPayload | byte[] | No | Serialized interaction data and target information |

## Usage

Sent by the server to trigger an interaction animation or sequence for specific entities or players. This allows the server to coordinate synchronized interactions visible to relevant clients.
