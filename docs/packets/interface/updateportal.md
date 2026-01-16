---
sidebar_position: 18
---

# UpdatePortal

Sends portal information to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 229 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 16,384,020 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| portalId | int32 | No | Unique identifier for the portal |
| destination | String | No | Portal destination identifier |
| displayName | String | Yes | Display name shown to the player |
| portalData | byte[] | Yes | Additional portal configuration data |

## Usage

This packet is sent by the server to update portal information on the client. Portals may be used for fast travel, world transitions, or server transfers. This packet provides the client with the necessary data to display portal information and handle portal interactions.
