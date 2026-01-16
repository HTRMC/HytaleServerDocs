---
sidebar_position: 22
---

# BuilderToolSetEntityPickupEnabled

Enables or disables entity pickup.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 421 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 5 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| entityId | int (4 bytes, LE) | No | Network ID of the target entity |
| enabled | boolean (1 byte) | No | Whether pickup is enabled for this entity |

## Usage

Sent by the client to toggle whether an entity can be picked up. Used in the editor to control entity interaction behavior.
