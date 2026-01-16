---
sidebar_position: 8
---

# PasswordRejected

Notification that the password was rejected by the server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 17 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 74 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| newChallenge | byte[] | Yes | New challenge bytes for the next password attempt (max 64 bytes) |
| attemptsRemaining | int32 | No | Number of password attempts remaining before disconnection |

## Usage

This packet is sent by the server when the client submits an incorrect password via PasswordResponse. It includes the number of remaining attempts and a new challenge for the next attempt. The client should use the newChallenge bytes to compute a new password hash if they want to retry. If attemptsRemaining reaches zero, the server will typically disconnect the client. This challenge-response mechanism prevents replay attacks by ensuring each password submission uses a unique challenge.
