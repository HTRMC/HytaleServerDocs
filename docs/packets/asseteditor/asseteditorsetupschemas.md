---
sidebar_position: 6
---

# AssetEditorSetupSchemas

Sets up the JSON schemas used by the asset editor.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 305 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| schemas | byte[] | No | Compressed schema definitions |

## Usage

This packet transmits the JSON schema definitions that define the structure of various asset types in the editor. The schemas are compressed due to their potentially large size and are used for validation and auto-completion in the editor interface.
