---
sidebar_position: 5
---

# AssetEdiaCapabilities

Reports the capabilities available in the asset editor.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 304 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 5 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| capabilityFlags | int32 | No | Bit flags indicating available capabilities |
| version | byte | No | Editor capability version |

## Usage

This packet communicates which features and capabilities are available in the current asset editor session. The capability flags determine what operations the client can perform.
