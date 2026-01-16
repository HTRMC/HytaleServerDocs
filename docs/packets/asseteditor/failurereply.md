---
sidebar_position: 1
---

# FailureReply

Failure response sent when an asset editor operation fails.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 300 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| requestId | int32 | No | ID of the failed request |
| errorCode | int32 | No | Error code indicating failure type |
| errorMessage | String | Yes | Human-readable error description |

## Usage

This packet is sent in response to a failed asset editor operation. It contains error information that can be displayed to the user or logged for debugging purposes.
