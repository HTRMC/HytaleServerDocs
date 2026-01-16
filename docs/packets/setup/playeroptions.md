---
sidebar_position: 14
---

# PlayerOptions

Sends player customization options to the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 33 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 327,680,184 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| skin | PlayerSkin | Yes | Player's skin/appearance configuration |

### PlayerSkin Structure

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| bodyCharacteristic | String (max 4,096,000 chars) | Yes | Body characteristic identifier |
| underwear | String (max 4,096,000 chars) | Yes | Underwear style identifier |
| face | String (max 4,096,000 chars) | Yes | Face type identifier |
| eyes | String (max 4,096,000 chars) | Yes | Eye style identifier |
| ears | String (max 4,096,000 chars) | Yes | Ear style identifier |
| mouth | String (max 4,096,000 chars) | Yes | Mouth style identifier |
| facialHair | String (max 4,096,000 chars) | Yes | Facial hair style identifier |
| haircut | String (max 4,096,000 chars) | Yes | Haircut style identifier |
| eyebrows | String (max 4,096,000 chars) | Yes | Eyebrow style identifier |
| pants | String (max 4,096,000 chars) | Yes | Pants style identifier |
| overpants | String (max 4,096,000 chars) | Yes | Over-pants style identifier |
| undertop | String (max 4,096,000 chars) | Yes | Under-top style identifier |
| overtop | String (max 4,096,000 chars) | Yes | Over-top style identifier |
| shoes | String (max 4,096,000 chars) | Yes | Shoes style identifier |
| headAccessory | String (max 4,096,000 chars) | Yes | Head accessory identifier |
| faceAccessory | String (max 4,096,000 chars) | Yes | Face accessory identifier |
| earAccessory | String (max 4,096,000 chars) | Yes | Ear accessory identifier |
| skinFeature | String (max 4,096,000 chars) | Yes | Skin feature identifier |
| gloves | String (max 4,096,000 chars) | Yes | Gloves style identifier |
| cape | String (max 4,096,000 chars) | Yes | Cape style identifier |

## Usage

This packet is sent by the server to provide the client with player customization data. The PlayerSkin structure contains identifiers for various appearance customization options including body characteristics, clothing, accessories, and other visual elements. This allows players to have unique appearances that are synchronized across all clients in the game.
