---
sidebar_position: 9
---

# SwitchHotbarBlockSet

Switches the hotbar to display a specific block set category.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 178 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Max Size** | 16384006 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| itemId | String (variable) | Yes | Identifier of the block set to switch to |

## Usage

Sent by the client to switch the hotbar to display a different block set category, typically used in builder mode to cycle through different material categories.
