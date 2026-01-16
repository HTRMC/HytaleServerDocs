---
sidebar_position: 1
---

# SetEntitySeed

Sets the random seed for an entity, used for deterministic randomization of entity behavior and visuals.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 160 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 4 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| seed | int32 | No | Random seed value for the entity |

## Usage

Sent by the server to assign a random seed to an entity. This seed is used to ensure deterministic behavior for randomized aspects of the entity, such as animations, visual variations, or procedural effects. By sharing the same seed between server and client, both can produce identical random sequences without additional synchronization.
