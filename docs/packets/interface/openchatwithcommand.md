---
sidebar_position: 23
---

# OpenChatWithCommand

Opens the chat interface with a pre-filled command.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 234 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 16,384,006 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| command | String | No | The command text to pre-fill in the chat input |

## Usage

This packet is sent by the server to open the client's chat interface with a pre-filled command. This can be used to suggest commands to players, enable quick command execution from UI buttons, or assist players in using complex commands by providing a template they can modify.
