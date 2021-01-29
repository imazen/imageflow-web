---
id: "_json_.graph"
title: "Graph"
sidebar_label: "Graph"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["json"](../modules/_json_.md) › [Graph](_json_.graph.md)

## Hierarchy

* **Graph**

## Index

### Properties

* [_internal](_json_.graph.md#_internal)

### Methods

* [addEdge](_json_.graph.md#addedge)
* [addVertex](_json_.graph.md#addvertex)
* [toEdge](_json_.graph.md#toedge)

## Properties

###  _internal

• **_internal**: *Map‹number, Array‹[edge](../interfaces/_json_.edge.md)››* = new Map()

*Defined in [json.ts:484](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L484)*

## Methods

###  addEdge

▸ **addEdge**(`to`: number, `from`: number, `type`: string): *void*

*Defined in [json.ts:492](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L492)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`to` | number | - |
`from` | number | - |
`type` | string | "input" |

**Returns:** *void*

___

###  addVertex

▸ **addVertex**(`vertex`: number): *void*

*Defined in [json.ts:486](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L486)*

**Parameters:**

Name | Type |
------ | ------ |
`vertex` | number |

**Returns:** *void*

___

###  toEdge

▸ **toEdge**(): *Array‹Object›*

*Defined in [json.ts:498](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L498)*

**Returns:** *Array‹Object›*
