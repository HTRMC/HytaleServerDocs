---
sidebar_position: 5
---

# ConnectAccept

Connection accepted packet confirming successful authentication.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 14 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 70 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| passwordChallenge | byte[] | Yes | Optional password challenge for password-protected servers (max 64 bytes) |

## Usage

This packet is sent by the server to indicate that the client's connection has been accepted. If the server requires a password, the passwordChallenge field contains random bytes that the client must use to compute a password hash (typically combined with the password using a cryptographic hash function). The client should then respond with a PasswordResponse packet. If no password is required, the passwordChallenge will be null and the client can proceed directly to gameplay.
