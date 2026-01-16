---
sidebar_position: 17
---

# UpdateKnownRecipes

Updates the list of recipes known to the player.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 228 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| recipeIds | String[] | No | Array of recipe identifiers the player has unlocked |
| action | byte | No | Action type (add, remove, or replace all) |

## Usage

This packet is sent by the server to update the client's known recipes list. In crafting systems, players may need to discover or unlock recipes before they can craft certain items. This packet keeps the client's recipe book synchronized with the server's record of what recipes the player has learned.
