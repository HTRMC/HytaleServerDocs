---
sidebar_position: 24
---

# UpdateSleepState

Updates the sleep state UI and mechanics.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 157 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 65,536,050 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| grayFade | boolean | No | Whether to display the gray fade effect |
| sleepUi | boolean | No | Whether to show the sleep UI |
| clock | SleepClock (33 bytes) | Yes | Clock display data for the sleep UI |
| multiplayer | SleepMultiplayer (variable) | Yes | Multiplayer sleep coordination data |

### SleepClock Structure

Contains information for displaying the sleep progress clock.

### SleepMultiplayer Structure

Contains information about other players' sleep status in multiplayer.

## Usage

This packet is sent by the server to update the client's sleep state. It controls the visual effects (gray fade), sleep UI visibility, clock display showing time progression, and in multiplayer, shows how many players are sleeping. This is used when players interact with beds to skip the night.
