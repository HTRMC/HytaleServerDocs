---
sidebar_position: 56
---

# AssetUpdateModelPreview

Updates the model preview settings.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 355 |
| **Direction** | Client ↔ Server |
| **Compressed** | Yes |
| **Max Size** | Variable |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| modelPath | String | No | Path of the model to preview |
| settings | byte[] | Yes | Compressed preview settings |

## Usage

This packet updates the model preview in the asset editor. It allows developers to view and configure how models appear in the preview window with various settings such as lighting, animation state, and camera position.
