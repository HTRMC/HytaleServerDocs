---
sidebar_position: 1
---

# BuilderToolArgUpdate

Updates a builder tool argument value.

## Packet Info

| Property | Value |
|----------|-------|
| **Packet ID** | 400 |
| **Direction** | Client -> Server |
| **Compressed** | No |
| **Max Size** | 32,768,032 bytes |

## Fields

| Field | Type | Nullable | Description |
|-------|------|----------|-------------|
| token | int (4 bytes, LE) | No | Token identifying the tool instance |
| section | int (4 bytes, LE) | No | Section index of the argument |
| slot | int (4 bytes, LE) | No | Slot index of the argument |
| group | BuilderToolArgGroup (byte enum) | No | Argument group (Tool, etc.) |
| id | String (max 4,096,000 chars, UTF-8) | Yes | Argument identifier |
| value | String (max 4,096,000 chars, UTF-8) | Yes | New argument value |

## Usage

Sent by the client to update a specific argument value for a builder tool. This packet supports variable-length string fields for both the argument identifier and its value.
