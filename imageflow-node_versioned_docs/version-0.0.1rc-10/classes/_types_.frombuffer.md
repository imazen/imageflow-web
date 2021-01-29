---
id: "_types_.frombuffer"
title: "FromBuffer"
sidebar_label: "FromBuffer"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [FromBuffer](_types_.frombuffer.md)

## Hierarchy

* **FromBuffer**

## Implements

* [IOOperation](_types_.iooperation.md)

## Index

### Constructors

* [constructor](_types_.frombuffer.md#constructor)

### Properties

* [buffer](_types_.frombuffer.md#private-buffer)
* [direction](_types_.frombuffer.md#private-direction)
* [ioId](_types_.frombuffer.md#private-ioid)
* [key](_types_.frombuffer.md#private-key)

### Accessors

* [ioID](_types_.frombuffer.md#ioid)

### Methods

* [setIOID](_types_.frombuffer.md#setioid)
* [toIOBuffer](_types_.frombuffer.md#toiobuffer)
* [toIOID](_types_.frombuffer.md#toioid)
* [toOutput](_types_.frombuffer.md#tooutput)

## Constructors

###  constructor

\+ **new FromBuffer**(`buf`: Buffer, `key`: string): *[FromBuffer](_types_.frombuffer.md)*

*Defined in [types.ts:935](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L935)*

**Parameters:**

Name | Type |
------ | ------ |
`buf` | Buffer |
`key` | string |

**Returns:** *[FromBuffer](_types_.frombuffer.md)*

## Properties

### `Private` buffer

• **buffer**: *Buffer*

*Defined in [types.ts:928](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L928)*

___

### `Private` direction

• **direction**: *[Direction](../enums/_types_.direction.md)*

*Defined in [types.ts:930](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L930)*

___

### `Private` ioId

• **ioId**: *number*

*Defined in [types.ts:929](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L929)*

___

### `Private` key

• **key**: *string*

*Defined in [types.ts:931](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L931)*

## Accessors

###  ioID

• **get ioID**(): *number*

*Defined in [types.ts:951](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L951)*

**Returns:** *number*

## Methods

###  setIOID

▸ **setIOID**(`id`: number, `direction`: [Direction](../enums/_types_.direction.md)): *void*

*Defined in [types.ts:947](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L947)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`direction` | [Direction](../enums/_types_.direction.md) |

**Returns:** *void*

___

###  toIOBuffer

▸ **toIOBuffer**(): *Promise‹ArrayBuffer | SharedArrayBuffer›*

*Defined in [types.ts:933](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L933)*

**Returns:** *Promise‹ArrayBuffer | SharedArrayBuffer›*

___

###  toIOID

▸ **toIOID**(): *Object*

*Defined in [types.ts:940](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L940)*

**Returns:** *Object*

___

###  toOutput

▸ **toOutput**(`buffer`: ArrayBuffer, `collector`: Object): *Promise‹any›*

*Defined in [types.ts:954](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L954)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`collector` | Object |

**Returns:** *Promise‹any›*
