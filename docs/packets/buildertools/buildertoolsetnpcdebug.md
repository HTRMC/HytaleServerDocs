---
sidebar_position: 24
---

# BuilderToolSetNPCDebug

Enables or disables NPC debug mode for an entity.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 423 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 5 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| entityId | int (4 bytes, LE) | No | Network ID of the target NPC entity |
| enabled | boolean (1 byte) | No | Whether NPC debug mode is enabled |

## Usage

Sent by the client to toggle debug visualization for an NPC entity. When enabled, displays additional debug information about the NPC's AI state and behavior.
