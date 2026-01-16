---
sidebar_position: 2
---

# SuccessReply

Success response sent when an asset editor operation completes successfully.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 301 |
| **Direction** | Client ↔ Server |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| requestId | int32 | No | ID of the successful request |
| resultData | byte[] | Yes | Optional result data from the operation |

## Usage

This packet is sent in response to a successful asset editor operation. It confirms that the requested action was completed and may include result data depending on the operation type.
