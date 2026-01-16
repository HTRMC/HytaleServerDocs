---
sidebar_position: 16
---

# AssetEdUpdateAssetPack

Updates an existing asset pack.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 315 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| packId | String | No | ID of the asset pack to update |
| metadata | byte[] | No | Updated pack metadata |

## Usage

This packet is sent to update the metadata or configuration of an existing asset pack. It can modify pack properties such as name, description, or dependencies.
