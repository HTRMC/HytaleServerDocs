---
sidebar_position: 9
---

# BuilderToolSetTransformationModeState

Enables or disables transformation mode.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 408 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 1 byte |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| enabled | boolean (1 byte) | No | Whether transformation mode is enabled |

## Usage

Sent by the client to toggle transformation mode on or off. When enabled, the selection can be rotated, scaled, and transformed before being applied.
