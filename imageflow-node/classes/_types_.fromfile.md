---
id: "_types_.fromfile"
title: "FromFile"
sidebar_label: "FromFile"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [FromFile](_types_.fromfile.md)

## Hierarchy

* **FromFile**

## Implements

* [IOOperation](_types_.iooperation.md)

## Index

### Constructors

* [constructor](_types_.fromfile.md#constructor)

### Properties

* [direction](_types_.fromfile.md#private-direction)
* [filename](_types_.fromfile.md#private-filename)
* [ioId](_types_.fromfile.md#private-ioid)

### Accessors

* [ioID](_types_.fromfile.md#ioid)

### Methods

* [setIOID](_types_.fromfile.md#setioid)
* [toIOBuffer](_types_.fromfile.md#toiobuffer)
* [toIOID](_types_.fromfile.md#toioid)
* [toOutput](_types_.fromfile.md#tooutput)

## Constructors

###  constructor

\+ **new FromFile**(`filename`: string): *[FromFile](_types_.fromfile.md)*

*Defined in [types.ts:874](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L874)*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *[FromFile](_types_.fromfile.md)*

## Properties

### `Private` direction

• **direction**: *[Direction](../enums/_types_.direction.md)*

*Defined in [types.ts:867](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L867)*

___

### `Private` filename

• **filename**: *string*

*Defined in [types.ts:865](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L865)*

___

### `Private` ioId

• **ioId**: *number*

*Defined in [types.ts:866](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L866)*

## Accessors

###  ioID

• **get ioID**(): *number*

*Defined in [types.ts:872](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L872)*

**Returns:** *number*

## Methods

###  setIOID

▸ **setIOID**(`id`: number, `direction`: [Direction](../enums/_types_.direction.md)): *void*

*Defined in [types.ts:878](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L878)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`direction` | [Direction](../enums/_types_.direction.md) |

**Returns:** *void*

___

###  toIOBuffer

▸ **toIOBuffer**(): *Promise‹ArrayBuffer | SharedArrayBuffer›*

*Defined in [types.ts:868](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L868)*

**Returns:** *Promise‹ArrayBuffer | SharedArrayBuffer›*

___

###  toIOID

▸ **toIOID**(): *Object*

*Defined in [types.ts:883](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L883)*

**Returns:** *Object*

___

###  toOutput

▸ **toOutput**(`buffer`: ArrayBuffer, `collector`: Object): *Promise‹void›*

*Defined in [types.ts:891](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L891)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`collector` | Object |

**Returns:** *Promise‹void›*
