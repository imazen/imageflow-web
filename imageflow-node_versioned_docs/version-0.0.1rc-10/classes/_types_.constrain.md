---
id: "_types_.constrain"
title: "Constrain"
sidebar_label: "Constrain"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [Constrain](_types_.constrain.md)

## Hierarchy

* **Constrain**

## Implements

* [BaseStep](_types_.basestep.md)

## Index

### Constructors

* [constructor](_types_.constrain.md#constructor)

### Properties

* [canvasColor](_types_.constrain.md#private-optional-readonly-canvascolor)
* [gravity](_types_.constrain.md#private-optional-gravity)
* [height](_types_.constrain.md#private-optional-readonly-height)
* [hints](_types_.constrain.md#private-optional-hints)
* [mode](_types_.constrain.md#private-mode)
* [width](_types_.constrain.md#private-optional-readonly-width)

### Methods

* [toStep](_types_.constrain.md#tostep)

## Constructors

###  constructor

\+ **new Constrain**(`mode`: [ConstrainMode](../enums/_types_.constrainmode.md), `width`: number | null, `height`: number | null, `__namedParameters`: object): *[Constrain](_types_.constrain.md)*

*Defined in [types.ts:341](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L341)*

**Parameters:**

▪ **mode**: *[ConstrainMode](../enums/_types_.constrainmode.md)*

▪`Default value`  **width**: *number | null*= null

▪`Default value`  **height**: *number | null*= null

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`canvasColor` | string | null |
`canvasGravity` | [ConstrainGravity](_types_.constraingravity.md)‹› | null |
`hints` | [ConstrainHints](_types_.constrainhints.md)‹› | null |

**Returns:** *[Constrain](_types_.constrain.md)*

## Properties

### `Private` `Optional` `Readonly` canvasColor

• **canvasColor**? : *string*

*Defined in [types.ts:329](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L329)*

___

### `Private` `Optional` gravity

• **gravity**? : *[ConstrainGravity](_types_.constraingravity.md)*

*Defined in [types.ts:327](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L327)*

___

### `Private` `Optional` `Readonly` height

• **height**? : *number*

*Defined in [types.ts:326](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L326)*

___

### `Private` `Optional` hints

• **hints**? : *[ConstrainHints](_types_.constrainhints.md)*

*Defined in [types.ts:324](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L324)*

___

### `Private` mode

• **mode**: *[ConstrainMode](../enums/_types_.constrainmode.md)*

*Defined in [types.ts:328](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L328)*

___

### `Private` `Optional` `Readonly` width

• **width**? : *number*

*Defined in [types.ts:325](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L325)*

## Methods

###  toStep

▸ **toStep**(): *Object*

*Defined in [types.ts:330](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L330)*

**Returns:** *Object*
