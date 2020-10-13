---
id: "_types_.fromstream"
title: "FromStream"
sidebar_label: "FromStream"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [FromStream](_types_.fromstream.md)

## Hierarchy

* **FromStream**

## Implements

* [IOOperation](_types_.iooperation.md)

## Index

### Constructors

* [constructor](_types_.fromstream.md#constructor)

### Properties

* [direction](_types_.fromstream.md#private-direction)
* [internalStream](_types_.fromstream.md#private-internalstream)
* [ioId](_types_.fromstream.md#private-ioid)

### Accessors

* [ioID](_types_.fromstream.md#ioid)

### Methods

* [setIOID](_types_.fromstream.md#setioid)
* [toIOBuffer](_types_.fromstream.md#toiobuffer)
* [toIOID](_types_.fromstream.md#toioid)
* [toOutput](_types_.fromstream.md#tooutput)

## Constructors

###  constructor

\+ **new FromStream**(`str`: stream.Writable): *[FromStream](_types_.fromstream.md)*

*Defined in [types.ts:899](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L899)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | stream.Writable |

**Returns:** *[FromStream](_types_.fromstream.md)*

## Properties

### `Private` direction

• **direction**: *[Direction](../enums/_types_.direction.md)*

*Defined in [types.ts:898](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L898)*

___

### `Private` internalStream

• **internalStream**: *stream.Writable*

*Defined in [types.ts:899](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L899)*

___

### `Private` ioId

• **ioId**: *number*

*Defined in [types.ts:897](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L897)*

## Accessors

###  ioID

• **get ioID**(): *number*

*Defined in [types.ts:919](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L919)*

**Returns:** *number*

## Methods

###  setIOID

▸ **setIOID**(`id`: number, `direction`: [Direction](../enums/_types_.direction.md)): *void*

*Defined in [types.ts:915](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L915)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`direction` | [Direction](../enums/_types_.direction.md) |

**Returns:** *void*

___

###  toIOBuffer

▸ **toIOBuffer**(): *Promise‹ArrayBuffer | SharedArrayBuffer›*

*Defined in [types.ts:904](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L904)*

**Returns:** *Promise‹ArrayBuffer | SharedArrayBuffer›*

___

###  toIOID

▸ **toIOID**(): *Object*

*Defined in [types.ts:908](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L908)*

**Returns:** *Object*

___

###  toOutput

▸ **toOutput**(`buffer`: ArrayBuffer, `collector`: Object): *Promise‹any›*

*Defined in [types.ts:922](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L922)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`collector` | Object |

**Returns:** *Promise‹any›*
