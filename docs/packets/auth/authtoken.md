---
sidebar_position: 3
---

# AuthToken

Authentication token packet sent from the client to complete authentication.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 12 |
| **Direction** | Client to Server |
| **Compressed** | No |
| **Max Size** | 49171 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| accessToken | String | Yes | Client's access token for authentication (max 8192 characters) |
| serverAuthorizationGrant | String | Yes | Server authorization grant to complete the handshake (max 4096 characters) |

## Usage

This packet is sent by the client in response to an AuthGrant packet from the server. It contains the client's access token (obtained from the authentication service) and the server authorization grant. The server validates these credentials to authenticate the client. Upon successful validation, the server responds with a ServerAuthToken or ConnectAccept packet.
