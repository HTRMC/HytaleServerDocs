---
sidebar_position: 2
---

# EntityUpdates

Batch updates for multiple entities, including removals and state changes.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 161 |
| **Direction** | Server to Client |
| **Compressed** | Yes |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| removed | int32[] | No | Array of entity IDs that have been removed |
| updates | EntityUpdate[] | No | Array of entity update structures |

### EntityUpdate Structure

Each EntityUpdate contains the following information about an entity:

| Field | Type | Description |
|-------|------|-------------|
| entityId | int32 | Unique identifier of the entity |
| position | Vector3 | Current position of the entity in the world |
| state | Variable | Current state data for the entity |

## Usage

Sent by the server to synchronize entity states with the client. This packet efficiently batches multiple entity updates together, reducing network overhead. The `removed` array contains IDs of entities that should be despawned on the client. The `updates` array contains full state updates for entities that need synchronization, including position, rotation, animation state, and other entity-specific data. Due to the potentially large payload, this packet is compressed.
