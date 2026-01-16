---
sidebar_position: 6
---

# PasswordResponse

Password hash response sent from the client to authenticate with a password-protected server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 15 |
| **Direction** | Client to Server |
| **Compressed** | No |
| **Max Size** | 70 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| hash | byte[] | Yes | Computed password hash (max 64 bytes) |

## Usage

This packet is sent by the client in response to a password challenge from the server (received via ConnectAccept or ServerAuthToken). The hash field contains the result of hashing the password combined with the challenge bytes. This prevents the plain-text password from being transmitted over the network. The server validates the hash and responds with either PasswordAccepted or PasswordRejected.
