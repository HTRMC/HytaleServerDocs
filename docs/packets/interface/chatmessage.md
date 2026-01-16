---
sidebar_position: 2
---

# ChatMessage

Sends a chat message to be displayed in the client's chat interface.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 211 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 16,384,006 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| message | String | No | The chat message content |
| sender | String | Yes | The name of the message sender |
| timestamp | long | No | Unix timestamp of when the message was sent |

## Usage

This packet is sent by the server to display chat messages in the client's chat window. It can include messages from other players, system messages, or command output. The client uses this to populate the chat history and display new messages to the player.
