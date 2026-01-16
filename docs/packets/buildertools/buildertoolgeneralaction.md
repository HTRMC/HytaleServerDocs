---
sidebar_position: 13
---

# BuilderToolGeneralAction

Performs a general builder tool action.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 412 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 1 byte |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| action | BuilderToolAction (byte enum) | No | The action to perform (SelectionPosition1, etc.) |

## Usage

Sent by the client to trigger a general builder tool action such as setting selection positions, copying, pasting, or other common operations.
