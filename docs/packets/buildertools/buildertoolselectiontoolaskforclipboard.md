---
sidebar_position: 11
---

# BuilderToolSelectionToolAskForClipboard

Requests the current clipboard contents from the server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 410 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 0 bytes |

## Fields

This packet has no fields.

## Usage

Sent by the client to request the server to send the current clipboard contents. The server responds with a BuilderToolSelectionToolReplyWithClipboard packet.
