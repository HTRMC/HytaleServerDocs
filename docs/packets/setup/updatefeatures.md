---
sidebar_position: 12
---

# UpdateFeatures

Updates client feature flags.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 31 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 8,192,006 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| features | `Map<ClientFeature, Boolean>` (max 4,096,000 entries) | Yes | Dictionary of feature flags and their enabled states |

### ClientFeature Enum

A byte enum representing various client-side features that can be toggled by the server.

## Usage

This packet is sent by the server to enable or disable specific client features. Each feature is identified by a ClientFeature enum value and associated with a boolean indicating whether it should be enabled or disabled. This allows servers to customize the client experience, enable experimental features, or restrict certain functionality based on server configuration or player permissions.
