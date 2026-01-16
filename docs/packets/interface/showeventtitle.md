---
sidebar_position: 5
---

# ShowEventTitle

Displays an event title on the client's screen.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 214 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| title | String | No | The main title text |
| subtitle | String | Yes | Optional subtitle text |
| fadeIn | int32 | No | Fade in duration (milliseconds) |
| stay | int32 | No | Duration to stay on screen (milliseconds) |
| fadeOut | int32 | No | Fade out duration (milliseconds) |

## Usage

This packet is sent by the server to display prominent event titles on the client's screen. Event titles are typically used for boss encounters, entering new areas, quest milestones, or other significant game events that warrant a dramatic on-screen announcement.
