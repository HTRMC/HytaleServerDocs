---
sidebar_position: 15
---

# ServerTags

Sends server-defined tags to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 34 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| tags | `Map<String, Integer>` (max 4,096,000 entries) | Yes | Dictionary of tag names to integer values |

## Usage

This packet is sent by the server to provide the client with a set of server-defined tags. These tags are key-value pairs where the key is a string identifier and the value is an integer. Tags can be used for various purposes such as identifying server features, version information, game mode settings, or custom server configurations. The client can use these tags to adjust its behavior or display based on the server's configuration.
