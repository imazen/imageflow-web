---
id: "_types_.constrainhints"
title: "ConstrainHints"
sidebar_label: "ConstrainHints"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [ConstrainHints](_types_.constrainhints.md)

## Hierarchy

* **ConstrainHints**

## Index

### Constructors

* [constructor](_types_.constrainhints.md#constructor)

### Properties

* [downFilter](_types_.constrainhints.md#private-downfilter)
* [resampleWhen](_types_.constrainhints.md#private-resamplewhen)
* [scalingColorSpace](_types_.constrainhints.md#private-scalingcolorspace)
* [sharpenPercent](_types_.constrainhints.md#private-readonly-sharpenpercent)
* [sharpenWhen](_types_.constrainhints.md#private-sharpenwhen)
* [upFilter](_types_.constrainhints.md#private-upfilter)

### Methods

* [toHint](_types_.constrainhints.md#tohint)

## Constructors

###  constructor

\+ **new ConstrainHints**(`sharpenPercent`: number, `__namedParameters`: object): *[ConstrainHints](_types_.constrainhints.md)*

*Defined in [types.ts:254](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L254)*

**Parameters:**

▪ **sharpenPercent**: *number*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type |
------ | ------ |
`downFilter` | [Filter](../enums/_types_.filter.md) |
`resampleWhen` | [ResampleWhen](../enums/_types_.resamplewhen.md) |
`scalingColorScape` | [ScalingFloatspace](../enums/_types_.scalingfloatspace.md) |
`sharpenWhen` | [SharpenWhen](../enums/_types_.sharpenwhen.md) |
`upFilter` | [Filter](../enums/_types_.filter.md) |

**Returns:** *[ConstrainHints](_types_.constrainhints.md)*

## Properties

### `Private` downFilter

• **downFilter**: *[Filter](../enums/_types_.filter.md) | null*

*Defined in [types.ts:238](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L238)*

___

### `Private` resampleWhen

• **resampleWhen**: *[ResampleWhen](../enums/_types_.resamplewhen.md) | null*

*Defined in [types.ts:241](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L241)*

___

### `Private` scalingColorSpace

• **scalingColorSpace**: *[ScalingFloatspace](../enums/_types_.scalingfloatspace.md) | null*

*Defined in [types.ts:240](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L240)*

___

### `Private` `Readonly` sharpenPercent

• **sharpenPercent**: *number*

*Defined in [types.ts:237](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L237)*

___

### `Private` sharpenWhen

• **sharpenWhen**: *[SharpenWhen](../enums/_types_.sharpenwhen.md) | null*

*Defined in [types.ts:242](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L242)*

___

### `Private` upFilter

• **upFilter**: *[Filter](../enums/_types_.filter.md) | null*

*Defined in [types.ts:239](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L239)*

## Methods

###  toHint

▸ **toHint**(): *Object*

*Defined in [types.ts:243](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L243)*

**Returns:** *Object*
