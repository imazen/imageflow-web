---
id: "_types_.commandstring"
title: "CommandString"
sidebar_label: "CommandString"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [CommandString](_types_.commandstring.md)

## Hierarchy

* **CommandString**

## Implements

* [BaseStep](_types_.basestep.md)

## Index

### Constructors

* [constructor](_types_.commandstring.md#constructor)

### Properties

* [command](_types_.commandstring.md#private-readonly-command)
* [decode](_types_.commandstring.md#private-readonly-decode)
* [encode](_types_.commandstring.md#private-readonly-encode)

### Methods

* [toStep](_types_.commandstring.md#tostep)

## Constructors

###  constructor

\+ **new CommandString**(`command`: string, `encode`: number | null, `decode`: number | null): *[CommandString](_types_.commandstring.md)*

*Defined in [types.ts:701](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L701)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`command` | string | - |
`encode` | number &#124; null | null |
`decode` | number &#124; null | null |

**Returns:** *[CommandString](_types_.commandstring.md)*

## Properties

### `Private` `Readonly` command

• **command**: *string*

*Defined in [types.ts:689](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L689)*

___

### `Private` `Readonly` decode

• **decode**: *number | null*

*Defined in [types.ts:691](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L691)*

___

### `Private` `Readonly` encode

• **encode**: *number | null*

*Defined in [types.ts:690](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L690)*

## Methods

###  toStep

▸ **toStep**(): *Object*

*Defined in [types.ts:692](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L692)*

**Returns:** *Object*
