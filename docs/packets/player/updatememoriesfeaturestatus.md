---
sidebar_position: 19
---

# UpdateMemoriesFeatureStatus

Updates the status of the memories feature.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 118 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Size** | 1 byte (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| featureStatus | byte | No | Memory feature enabled/disabled status |

## Usage

Sent by the client to update the memories feature status setting.
