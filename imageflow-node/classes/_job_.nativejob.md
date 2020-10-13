---
id: "_job_.nativejob"
title: "NativeJob"
sidebar_label: "NativeJob"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["job"](../modules/_job_.md) › [NativeJob](_job_.nativejob.md)

## Hierarchy

* **NativeJob**

## Index

### Constructors

* [constructor](_job_.nativejob.md#constructor)

### Properties

* [inUse](_job_.nativejob.md#private-inuse)
* [internalJob](_job_.nativejob.md#private-internaljob)

### Methods

* [addInputBytes](_job_.nativejob.md#addinputbytes)
* [addOutputBuffer](_job_.nativejob.md#addoutputbuffer)
* [getOutputBufferBytes](_job_.nativejob.md#getoutputbufferbytes)
* [message](_job_.nativejob.md#message)
* [messageSync](_job_.nativejob.md#messagesync)

## Constructors

###  constructor

\+ **new NativeJob**(): *[NativeJob](_job_.nativejob.md)*

*Defined in [job.ts:5](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/job.ts#L5)*

**Returns:** *[NativeJob](_job_.nativejob.md)*

## Properties

### `Private` inUse

• **inUse**: *boolean*

*Defined in [job.ts:4](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/job.ts#L4)*

___

### `Private` internalJob

• **internalJob**: *[JobType](../interfaces/_native_.jobtype.md)*

*Defined in [job.ts:5](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/job.ts#L5)*

## Methods

###  addInputBytes

▸ **addInputBytes**(`ioId`: number, `bytes`: ArrayBuffer): *void*

*Defined in [job.ts:11](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/job.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`ioId` | number |
`bytes` | ArrayBuffer |

**Returns:** *void*

___

###  addOutputBuffer

▸ **addOutputBuffer**(`ioId`: number): *void*

*Defined in [job.ts:27](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/job.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`ioId` | number |

**Returns:** *void*

___

###  getOutputBufferBytes

▸ **getOutputBufferBytes**(`ioId`: number): *ArrayBuffer*

*Defined in [job.ts:19](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/job.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`ioId` | number |

**Returns:** *ArrayBuffer*

___

###  message

▸ **message**(`endPoint`: string, `tasks`: string): *Promise‹string›*

*Defined in [job.ts:35](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/job.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`endPoint` | string |
`tasks` | string |

**Returns:** *Promise‹string›*

___

###  messageSync

▸ **messageSync**(`endPoint`: string, `tasks`: string): *string*

*Defined in [job.ts:46](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/job.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`endPoint` | string |
`tasks` | string |

**Returns:** *string*
