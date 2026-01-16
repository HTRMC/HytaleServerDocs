---
sidebar_position: 19
---

# UpdateVisibleHudComponents

Controls the visibility of HUD components on the client.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 230 |
| **Direction** | Server to Client |
| **Compressed** | No |
| **Max Size** | 4,096,006 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| visibilityFlags | int32 | No | Bitmask of which HUD components should be visible |
| componentStates | ComponentState[] | Yes | Individual component visibility states |

## ComponentState Structure

| Field | Type | Description |
|-------|------|-------------|
| componentId | String | Identifier of the HUD component |
| visible | boolean | Whether the component should be visible |

## Usage

This packet is sent by the server to control which HUD components are displayed on the client. This allows the server to hide or show elements like the health bar, minimap, hotbar, or custom HUD elements based on game state, such as during cutscenes or when entering specific game modes.
