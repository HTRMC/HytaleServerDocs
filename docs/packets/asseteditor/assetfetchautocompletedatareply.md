---
sidebar_position: 33
---

# AssetFetchAutocompleteDataReply

Response containing autocomplete suggestions.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 332 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| requestId | int32 | No | ID of the original request |
| suggestions | byte[] | No | Compressed list of suggestions |

## Usage

This packet provides autocomplete suggestions for the editor. Each suggestion includes the completion text and optional metadata such as type information or documentation.
