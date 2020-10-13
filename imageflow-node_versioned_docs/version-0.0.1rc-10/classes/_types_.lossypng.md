---
id: "_types_.lossypng"
title: "LossyPNG"
sidebar_label: "LossyPNG"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [LossyPNG](_types_.lossypng.md)

## Hierarchy

* **LossyPNG**

## Implements

* [Preset](_types_.preset.md)

## Index

### Constructors

* [constructor](_types_.lossypng.md#constructor)

### Properties

* [maxDeflate](_types_.lossypng.md#private-readonly-maxdeflate)
* [minimumQuality](_types_.lossypng.md#private-readonly-minimumquality)
* [quality](_types_.lossypng.md#private-readonly-quality)
* [speed](_types_.lossypng.md#private-readonly-speed)

### Methods

* [toPreset](_types_.lossypng.md#topreset)

## Constructors

###  constructor

\+ **new LossyPNG**(`quality`: number, `minQuality`: number, `speed`: number | null, `maxDeflate`: boolean): *[LossyPNG](_types_.lossypng.md)*

*Defined in [types.ts:122](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L122)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`quality` | number | - |
`minQuality` | number | - |
`speed` | number &#124; null | null |
`maxDeflate` | boolean | false |

**Returns:** *[LossyPNG](_types_.lossypng.md)*

## Properties

### `Private` `Readonly` maxDeflate

• **maxDeflate**: *boolean*

*Defined in [types.ts:112](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L112)*

___

### `Private` `Readonly` minimumQuality

• **minimumQuality**: *number*

*Defined in [types.ts:110](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L110)*

___

### `Private` `Readonly` quality

• **quality**: *number*

*Defined in [types.ts:109](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L109)*

___

### `Private` `Readonly` speed

• **speed**: *number | null*

*Defined in [types.ts:111](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L111)*

## Methods

###  toPreset

▸ **toPreset**(): *Object*

*Defined in [types.ts:113](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L113)*

**Returns:** *Object*
