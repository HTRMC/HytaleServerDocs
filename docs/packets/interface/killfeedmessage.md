---
sidebar_position: 4
---

# KillFeedMessage

Displays a kill feed entry in the client's HUD.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 213 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 1,677,721,600 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| message | String | No | The kill feed message content |
| killerName | String | Yes | Name of the entity that caused the death |
| victimName | String | No | Name of the entity that died |
| weaponIcon | String | Yes | Icon identifier for the weapon used |

## Usage

This packet is sent by the server to display kill feed entries in the client's HUD. The kill feed shows recent deaths in the game, including who killed whom and optionally with what weapon. This is commonly used in PvP scenarios to keep players informed of combat events.
