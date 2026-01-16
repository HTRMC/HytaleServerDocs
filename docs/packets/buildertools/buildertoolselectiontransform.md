---
sidebar_position: 6
---

# BuilderToolSelectionTransform

Applies a transformation to a selection.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 405 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 16,384,057 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| transformationMatrix | float[] (max 4,096,000 elements) | Yes | Transformation matrix values |
| initialSelectionMin | BlockPosition (12 bytes) | Yes | Initial minimum corner of selection |
| initialSelectionMax | BlockPosition (12 bytes) | Yes | Initial maximum corner of selection |
| initialRotationOrigin | Vector3f (12 bytes) | Yes | Origin point for rotation |
| cutOriginal | boolean (1 byte) | No | Whether to remove the original blocks |
| applyTransformationToSelectionMinMax | boolean (1 byte) | No | Apply transform to selection bounds |
| isExitingTransformMode | boolean (1 byte) | No | Whether exiting transform mode |
| initialPastePointForClipboardPaste | BlockPosition (12 bytes) | Yes | Initial paste point for clipboard operations |

## Usage

Sent by the client to apply a transformation (rotation, translation, etc.) to the current selection. Supports complex matrix transformations for advanced manipulation of selected blocks.
