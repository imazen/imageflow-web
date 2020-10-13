---
id: "_types_.fromurl"
title: "FromURL"
sidebar_label: "FromURL"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [FromURL](_types_.fromurl.md)

## Hierarchy

* **FromURL**

## Implements

* [IOOperation](_types_.iooperation.md)

## Index

### Constructors

* [constructor](_types_.fromurl.md#constructor)

### Properties

* [direction](_types_.fromurl.md#private-direction)
* [ioId](_types_.fromurl.md#private-ioid)
* [url](_types_.fromurl.md#private-url)

### Accessors

* [ioID](_types_.fromurl.md#ioid)

### Methods

* [setIOID](_types_.fromurl.md#setioid)
* [toIOBuffer](_types_.fromurl.md#toiobuffer)
* [toIOID](_types_.fromurl.md#toioid)
* [toOutput](_types_.fromurl.md#tooutput)

## Constructors

###  constructor

\+ **new FromURL**(`url`: string): *[FromURL](_types_.fromurl.md)*

*Defined in [types.ts:971](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L971)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *[FromURL](_types_.fromurl.md)*

## Properties

### `Private` direction

• **direction**: *[Direction](../enums/_types_.direction.md)*

*Defined in [types.ts:962](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L962)*

___

### `Private` ioId

• **ioId**: *number*

*Defined in [types.ts:961](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L961)*

___

### `Private` url

• **url**: *string*

*Defined in [types.ts:960](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L960)*

## Accessors

###  ioID

• **get ioID**(): *number*

*Defined in [types.ts:969](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L969)*

**Returns:** *number*

## Methods

###  setIOID

▸ **setIOID**(`id`: number, `direction`: [Direction](../enums/_types_.direction.md)): *void*

*Defined in [types.ts:975](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L975)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`direction` | [Direction](../enums/_types_.direction.md) |

**Returns:** *void*

___

###  toIOBuffer

▸ **toIOBuffer**(): *Promise‹ArrayBuffer | SharedArrayBuffer›*

*Defined in [types.ts:963](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L963)*

**Returns:** *Promise‹ArrayBuffer | SharedArrayBuffer›*

___

###  toIOID

▸ **toIOID**(): *Object*

*Defined in [types.ts:980](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L980)*

**Returns:** *Object*

___

###  toOutput

▸ **toOutput**(`buffer`: ArrayBuffer, `collector`: Object): *Promise‹void›*

*Defined in [types.ts:988](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/types.ts#L988)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`collector` | Object |

**Returns:** *Promise‹void›*
