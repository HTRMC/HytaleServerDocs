---
sidebar_position: 1
---

# Connect

Initial connection request from client to server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 0 |
| **Direction** | Client → Server |
| **Compressed** | No |
| **Max Size** | 38,161 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| protocolHash | String (64 chars, ASCII) | No | Protocol version hash for compatibility check |
| clientType | ClientType (byte enum) | No | Type of client connecting (Game, Editor, etc.) |
| language | String (max 128 chars, ASCII) | Yes | Client's preferred language |
| identityToken | String (max 8192 chars, UTF-8) | Yes | Authentication token |
| uuid | UUID (16 bytes) | No | Player's unique identifier |
| username | String (max 16 chars, ASCII) | No | Player's display name |
| referralData | byte[] (max 4096) | Yes | Referral tracking data |
| referralSource | HostAddress | Yes | Source server for referrals |

## Usage

This is the first packet sent by a client when initiating a connection to the server.
