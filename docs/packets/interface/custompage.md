---
sidebar_position: 9
---

# CustomPage

Sends custom page configuration data to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 218 |
| **Direction** | Server to Client |
| **Compressed** | Yes |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| pageData | byte[] | No | Compressed custom page definition data |

## Usage

This packet is sent by the server to define custom UI pages on the client. Custom pages allow servers to create entirely new menu screens and interfaces, enabling features like custom shops, quest logs, team management screens, and other server-specific functionality. The data is compressed due to its potentially large size.
