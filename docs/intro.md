---
sidebar_position: 1
slug: /
---

# Hytale Server Protocol Documentation

:::warning Disclaimer
This is an **unofficial** community project. It is not affiliated with, endorsed by, or connected to Hypixel Studios or Hytale in any way. All trademarks and registered trademarks are the property of their respective owners.
:::

This documentation covers the network protocol used by Hytale servers to communicate with clients. The protocol consists of **170 packets** organized into 17 categories.

## Protocol Overview

The Hytale protocol uses a binary format built on Netty's ByteBuf for serialization. Key features include:

- **Packet IDs**: Each packet has a unique numeric identifier
- **Compression**: Some packets support compression for large data transfers
- **Variable-length fields**: Uses VarInt encoding for dynamic-length data
- **Nullable fields**: Bit-field encoding for optional fields
- **Validation**: Structured validation before deserialization

## Packet Categories

| Category | ID Range | Count | Description |
|----------|----------|-------|-------------|
| [Connection](/docs/category/connection) | 0-3 | 4 | Connection handshake and keepalive |
| [Authentication](/docs/category/authentication) | 10-18 | 9 | Login and authentication flow |
| [World Setup](/docs/category/world-setup) | 20-34 | 15 | World configuration and asset loading |
| [Asset Updates](/docs/category/asset-updates) | 40-85 | 46 | Game asset definitions and updates |
| [Player](/docs/category/player) | 100-119 | 20 | Player state and actions |
| [World](/docs/category/world) | 131-159 | 25 | Chunks, blocks, and world state |
| [Entities](/docs/category/entities) | 160-166 | 7 | Entity spawning and updates |
| [Inventory](/docs/category/inventory) | 170-179 | 10 | Inventory management |
| [Window/UI](/docs/category/windowui) | 200-204 | 5 | UI windows and interactions |
| [Interface](/docs/category/interface) | 210-234 | 22 | Chat, HUD, and notifications |
| [World Map](/docs/category/world-map) | 240-245 | 6 | Map display and teleportation |
| [Server Access](/docs/category/server-access) | 250-252 | 3 | Access control and permissions |
| [Machinima](/docs/category/machinima) | 260-262 | 3 | Cinematic camera features |
| [Camera](/docs/category/camera) | 280-283 | 4 | Camera control packets |
| [Interaction](/docs/category/interaction) | 290-294 | 5 | NPC and entity interactions |
| [Asset Editor](/docs/category/asset-editor) | 300-355 | 56 | Development tool packets |
| [Builder Tools](/docs/category/builder-tools) | 400-423 | 24 | World editing tools |

## Packet Direction

Packets flow in specific directions:

- **C → S** (Client to Server): Player actions, requests, movement
- **S → C** (Server to Client): World updates, entity state, assets
- **Bidirectional**: Some packets like Ping/Pong work both ways

## Data Types

Common data types used in packets:

| Type | Size | Description |
|------|------|-------------|
| `byte` | 1 | 8-bit signed integer |
| `short` | 2 | 16-bit signed integer (Little Endian) |
| `int` | 4 | 32-bit signed integer (Little Endian) |
| `long` | 8 | 64-bit signed integer (Little Endian) |
| `float` | 4 | 32-bit floating point |
| `double` | 8 | 64-bit floating point |
| `VarInt` | 1-5 | Variable-length integer |
| `String` | Variable | Length-prefixed UTF-8 or ASCII string |
| `UUID` | 16 | 128-bit unique identifier |
| `Position` | 24 | 3D position (3 doubles) |
| `Direction` | 12 | 3D direction vector (3 floats) |
| `Vector3d` | 24 | 3D vector (3 doubles) |

## Getting Started

Browse the packet categories in the sidebar to explore individual packet documentation. Each packet page includes:

- Packet ID and compression status
- Field definitions with types
- Size constraints
- Direction (Client/Server)
