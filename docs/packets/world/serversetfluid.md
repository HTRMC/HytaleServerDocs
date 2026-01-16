---
sidebar_position: 9
---

# ServerSetFluid

Updates a single fluid block in the world.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 142 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 17 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int32 | No | Fluid X coordinate (world position) |
| y | int32 | No | Fluid Y coordinate (world position) |
| z | int32 | No | Fluid Z coordinate (world position) |
| fluidId | int32 | No | The fluid type ID (water, lava, etc.) |
| fluidLevel | byte | No | The fluid level (0-15 typically) |

## Usage

This packet is sent by the server to update a single fluid at a specific world position. It is used for real-time fluid changes such as water or lava placement, fluid flow updates, or environmental changes. For updating multiple fluids at once, use ServerSetFluids instead.
