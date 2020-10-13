---
id: "_types_.iooperation"
title: "IOOperation"
sidebar_label: "IOOperation"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [IOOperation](_types_.iooperation.md)

## Hierarchy

* **IOOperation**

## Implemented by

* [FromBuffer](_types_.frombuffer.md)
* [FromFile](_types_.fromfile.md)
* [FromStream](_types_.fromstream.md)
* [FromURL](_types_.fromurl.md)

## Index

### Accessors

* [ioID](_types_.iooperation.md#ioid)

### Methods

* [setIOID](_types_.iooperation.md#abstract-setioid)
* [toIOBuffer](_types_.iooperation.md#abstract-toiobuffer)
* [toIOID](_types_.iooperation.md#abstract-toioid)
* [toOutput](_types_.iooperation.md#abstract-tooutput)

## Accessors

###  ioID

• **get ioID**(): *number*

*Defined in [types.ts:860](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L860)*

**Returns:** *number*

## Methods

### `Abstract` setIOID

▸ **setIOID**(`id`: number, `direction`: [Direction](../enums/_types_.direction.md)): *void*

*Defined in [types.ts:859](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L859)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`direction` | [Direction](../enums/_types_.direction.md) |

**Returns:** *void*

___

### `Abstract` toIOBuffer

▸ **toIOBuffer**(): *Promise‹ArrayBuffer | SharedArrayBuffer›*

*Defined in [types.ts:857](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L857)*

**Returns:** *Promise‹ArrayBuffer | SharedArrayBuffer›*

___

### `Abstract` toIOID

▸ **toIOID**(): *Object*

*Defined in [types.ts:858](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L858)*

**Returns:** *Object*

___

### `Abstract` toOutput

▸ **toOutput**(`buffer`: ArrayBuffer, `collector`: Object): *Promise‹any›*

*Defined in [types.ts:861](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L861)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`collector` | Object |

**Returns:** *Promise‹any›*
