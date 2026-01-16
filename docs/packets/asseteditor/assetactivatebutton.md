---
sidebar_position: 36
---

# AssetActivateButton

Activates a button action in the editor.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 335 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| buttonId | String | No | ID of the button to activate |
| context | byte[] | Yes | Additional context data |

## Usage

This packet triggers a button action in the asset editor UI. Buttons can perform various operations such as running validation, generating previews, or executing custom actions.
