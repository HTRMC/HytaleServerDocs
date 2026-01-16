---
sidebar_position: 10
---

# ServerSetFluids

Updates multiple fluid blocks in the world in bulk.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 143 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 28,672,017 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| x | int32 | No | Base chunk X coordinate |
| y | int32 | No | Base chunk Y coordinate |
| z | int32 | No | Base chunk Z coordinate |
| cmds | SetFluidCmd[] (max 4,096,000) | No | Array of fluid change commands |

### SetFluidCmd Structure

Each SetFluidCmd contains information about a single fluid update within the chunk.

## Usage

This packet is sent by the server to update multiple fluids at once, which is more efficient than sending individual ServerSetFluid packets. It is commonly used for large-scale fluid simulations, flooding events, or synchronized fluid updates. The coordinates specify the base chunk position, and each command in the array specifies a relative position within that area.
