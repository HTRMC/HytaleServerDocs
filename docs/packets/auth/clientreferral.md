---
sidebar_position: 9
---

# ClientReferral

Referral packet instructing the client to connect to a different server.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 18 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 5141 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| hostTo | HostAddress | Yes | Target server address to connect to |
| data | byte[] | Yes | Additional referral data (max 4096 bytes) |

### HostAddress Structure

| Field | Type | Description |
|-------|------|-------------|
| host | String | Hostname or IP address (max 256 characters) |
| port | int16 | Port number |

## Usage

This packet is sent by the server to redirect the client to a different server. This is commonly used in server networks to transfer players between different game servers (such as hub servers redirecting to game servers, or load balancing across multiple instances). The hostTo field contains the address of the target server, and the data field can contain additional context or authentication tokens that the target server may need to properly receive the transferred client.
