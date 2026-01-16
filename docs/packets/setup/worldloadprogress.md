---
sidebar_position: 2
---

# WorldLoadProgress

Reports the current progress of world loading to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 21 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 16,384,014 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| status | String (max 4,096,000 chars, UTF-8) | Yes | Current loading status message |
| percentComplete | int32 | No | Overall loading progress percentage (0-100) |
| percentCompleteSubitem | int32 | No | Progress percentage of the current sub-task (0-100) |

## Usage

This packet is sent by the server to update the client on the progress of world loading. It provides both an overall progress percentage and a sub-item percentage for more granular progress tracking. The status string can be displayed to the user to indicate what is currently being loaded. This allows the client to show a loading screen with progress information while the world is being prepared.
