---
id: "_types_.watermark"
title: "Watermark"
sidebar_label: "Watermark"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [Watermark](_types_.watermark.md)

## Hierarchy

* **Watermark**

## Implements

* [BaseStep](_types_.basestep.md)

## Index

### Constructors

* [constructor](_types_.watermark.md#constructor)

### Properties

* [fitBox](_types_.watermark.md#private-fitbox)
* [fitMode](_types_.watermark.md#private-readonly-fitmode)
* [gravity](_types_.watermark.md#private-gravity)
* [hint](_types_.watermark.md#private-hint)
* [ioID](_types_.watermark.md#private-readonly-ioid)
* [opacity](_types_.watermark.md#private-readonly-opacity)

### Methods

* [toStep](_types_.watermark.md#tostep)

## Constructors

###  constructor

\+ **new Watermark**(`ioID`: number, `__namedParameters`: object): *[Watermark](_types_.watermark.md)*

*Defined in [types.ts:672](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L672)*

**Parameters:**

▪ **ioID**: *number*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`box` | [FitBox](_types_.fitbox.md)‹› |
`gravity` | [ConstrainGravity](_types_.constraingravity.md)‹› |
`hint` | [ConstrainHints](_types_.constrainhints.md)‹› |
`mode` | [FitMode](../enums/_types_.fitmode.md) |
`opacity` | number |

**Returns:** *[Watermark](_types_.watermark.md)*

## Properties

### `Private` fitBox

• **fitBox**: *[FitBox](_types_.fitbox.md)*

*Defined in [types.ts:658](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L658)*

___

### `Private` `Readonly` fitMode

• **fitMode**: *[FitMode](../enums/_types_.fitmode.md)*

*Defined in [types.ts:657](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L657)*

___

### `Private` gravity

• **gravity**: *[ConstrainGravity](_types_.constraingravity.md)*

*Defined in [types.ts:656](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L656)*

___

### `Private` hint

• **hint**: *[ConstrainHints](_types_.constrainhints.md)*

*Defined in [types.ts:660](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L660)*

___

### `Private` `Readonly` ioID

• **ioID**: *number*

*Defined in [types.ts:655](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L655)*

___

### `Private` `Readonly` opacity

• **opacity**: *number*

*Defined in [types.ts:659](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L659)*

## Methods

###  toStep

▸ **toStep**(): *Object*

*Defined in [types.ts:661](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L661)*

**Returns:** *Object*
