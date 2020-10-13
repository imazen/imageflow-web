---
id: "_native_.jobtype"
title: "JobType"
sidebar_label: "JobType"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["native"](../modules/_native_.md) › [JobType](_native_.jobtype.md)

## Hierarchy

* **JobType**

## Index

### Methods

* [addInputBytesCopied](_native_.jobtype.md#addinputbytescopied)
* [addOutputBuffer](_native_.jobtype.md#addoutputbuffer)
* [getOutputBufferBytes](_native_.jobtype.md#getoutputbufferbytes)
* [message](_native_.jobtype.md#message)
* [messageSync](_native_.jobtype.md#messagesync)

## Methods

###  addInputBytesCopied

▸ **addInputBytesCopied**(`ioId`: number, `bytes`: ArrayBuffer): *void*

*Defined in [native.ts:4](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/native.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`ioId` | number |
`bytes` | ArrayBuffer |

**Returns:** *void*

___

###  addOutputBuffer

▸ **addOutputBuffer**(`ioId`: number): *void*

*Defined in [native.ts:6](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/native.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`ioId` | number |

**Returns:** *void*

___

###  getOutputBufferBytes

▸ **getOutputBufferBytes**(`ioId`: number): *ArrayBuffer*

*Defined in [native.ts:5](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/native.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`ioId` | number |

**Returns:** *ArrayBuffer*

___

###  message

▸ **message**(`endPoint`: string, `tasks`: string): *Promise‹string›*

*Defined in [native.ts:7](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/native.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`endPoint` | string |
`tasks` | string |

**Returns:** *Promise‹string›*

___

###  messageSync

▸ **messageSync**(`endPoint`: string, `tasks`: string): *string*

*Defined in [native.ts:8](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/native.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`endPoint` | string |
`tasks` | string |

**Returns:** *string*
