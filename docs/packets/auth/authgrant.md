---
sidebar_position: 2
---

# AuthGrant

Authentication challenge packet sent from the server to initiate the authentication handshake.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 11 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 49171 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| authorizationGrant | String | Yes | Authorization grant token for authentication (max 4096 characters) |
| serverIdentityToken | String | Yes | Server identity token for verification (max 8192 characters) |

## Usage

This packet is sent by the server to the client as part of the authentication flow. It contains the authorization grant that the client needs to complete the authentication process, along with the server's identity token which allows the client to verify the server's authenticity. The client should respond with an AuthToken packet containing the appropriate credentials.
