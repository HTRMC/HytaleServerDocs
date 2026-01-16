---
sidebar_position: 21
---

# UpdateLanguage

Updates the language setting for the client's interface.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 232 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 16,384,006 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| languageCode | String | No | Language code (e.g., "en-US", "de-DE") |
| translations | byte[] | Yes | Custom translation data from the server |

## Usage

This packet is sent by the server to update the client's language settings. This can be used to enforce a specific language for server-specific content or to provide custom translations for custom UI elements and messages that the server has added.
