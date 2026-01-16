---
sidebar_position: 32
---

# AssetFetchAutocompleteData

Requests autocomplete suggestions for the editor.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 331 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| context | String | No | The editing context for suggestions |
| prefix | String | No | Current input prefix |
| requestId | int32 | No | ID for tracking the request |

## Usage

This packet requests autocomplete suggestions based on the current editing context. The context includes information about the asset type and field being edited.
