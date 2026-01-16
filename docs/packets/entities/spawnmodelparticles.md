---
sidebar_position: 6
---

# SpawnModelParticles

Spawns particle effects attached to an entity model.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 165 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| entityId | int32 | No | The entity to attach particles to |
| particleSystemId | Variable | No | Identifier of the particle system to spawn |
| attachmentPoint | Variable | Yes | Model bone or attachment point for the particles |
| parameters | Variable | Yes | Optional particle system parameters |

## Usage

Sent by the server to spawn particle effects that are attached to a specific entity's model. These particles follow the entity and can be attached to specific bones or attachment points on the model, such as hands for spell effects or feet for footstep dust. This is commonly used for status effects, combat visuals, equipment effects, and environmental interactions with entities.
