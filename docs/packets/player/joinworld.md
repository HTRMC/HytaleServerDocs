---
sidebar_position: 5
---

# JoinWorld

Contains data for joining a world.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 104 |
| **Direction** | Server → Client |
| **Compressed** | No |
| **Size** | 18 bytes (fixed) |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| worldData | byte[] (18 bytes) | No | World join data including spawn information |

## Usage

Sent by the server when a player joins or transitions to a world, containing initial world state data.
