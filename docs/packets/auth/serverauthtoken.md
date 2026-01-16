---
sidebar_position: 4
---

# ServerAuthToken

Server authentication token packet containing server credentials and optional password challenge.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 13 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 32851 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| serverAccessToken | String | Yes | Server's access token for session establishment (max 8192 characters) |
| passwordChallenge | byte[] | Yes | Random challenge bytes for password authentication (max 64 bytes) |

## Usage

This packet is sent by the server after receiving and validating the client's AuthToken. It contains the server's access token for establishing the session. If the server requires password authentication (for password-protected servers), the passwordChallenge field contains random bytes that the client must use to hash the password before sending it back via a PasswordResponse packet. If no password is required, the passwordChallenge will be null.
