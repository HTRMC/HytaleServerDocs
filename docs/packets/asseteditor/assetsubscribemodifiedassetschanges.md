---
sidebar_position: 42
---

# AssetSubscribeModifiedAssetsChanges

Subscribes to notifications about modified asset changes.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 341 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 1 byte |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| subscribe | boolean | No | Whether to subscribe or unsubscribe |

## Usage

This packet enables or disables notifications when the modified assets list changes. When subscribed, the client will receive updates whenever assets are modified or saved.
