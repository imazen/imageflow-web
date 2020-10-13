---
id: "_json_.steps"
title: "Steps"
sidebar_label: "Steps"
---

[@imazen/imageflow](../index.md) › [Globals](../globals.md) › ["json"](../modules/_json_.md) › [Steps](_json_.steps.md)

## Hierarchy

* **Steps**

## Index

### Constructors

* [constructor](_json_.steps.md#constructor)

### Properties

* [decodeValue](_json_.steps.md#private-decodevalue)
* [graph](_json_.steps.md#private-graph)
* [inputs](_json_.steps.md#private-inputs)
* [ioID](_json_.steps.md#private-ioid)
* [last](_json_.steps.md#private-last)
* [outputs](_json_.steps.md#private-outputs)
* [vertex](_json_.steps.md#private-vertex)

### Methods

* [branch](_json_.steps.md#branch)
* [colorFilter](_json_.steps.md#colorfilter)
* [colorFilterAlpha](_json_.steps.md#colorfilteralpha)
* [colorFilterBrightness](_json_.steps.md#colorfilterbrightness)
* [colorFilterContrast](_json_.steps.md#colorfiltercontrast)
* [colorFilterGrayscaleBt709](_json_.steps.md#colorfiltergrayscalebt709)
* [colorFilterGrayscaleFlat](_json_.steps.md#colorfiltergrayscaleflat)
* [colorFilterGrayscaleNtsc](_json_.steps.md#colorfiltergrayscalentsc)
* [colorFilterGrayscaleRY](_json_.steps.md#colorfiltergrayscalery)
* [colorFilterInvert](_json_.steps.md#colorfilterinvert)
* [command](_json_.steps.md#command)
* [constrain](_json_.steps.md#constrain)
* [constrainWithin](_json_.steps.md#constrainwithin)
* [copyRectangle](_json_.steps.md#copyrectangle)
* [cropWhiteSpace](_json_.steps.md#cropwhitespace)
* [decode](_json_.steps.md#decode)
* [distort](_json_.steps.md#distort)
* [drawImageExactTo](_json_.steps.md#drawimageexactto)
* [encode](_json_.steps.md#encode)
* [execute](_json_.steps.md#execute)
* [executeCommand](_json_.steps.md#executecommand)
* [expandCanvas](_json_.steps.md#expandcanvas)
* [fillRect](_json_.steps.md#fillrect)
* [flipHorizontal](_json_.steps.md#fliphorizontal)
* [flipVertical](_json_.steps.md#flipvertical)
* [region](_json_.steps.md#region)
* [rotate](_json_.steps.md#rotate)
* [rotate180](_json_.steps.md#rotate180)
* [rotate270](_json_.steps.md#rotate270)
* [rotate90](_json_.steps.md#rotate90)
* [watermark](_json_.steps.md#watermark)

## Constructors

###  constructor

\+ **new Steps**(`operation`: [IOOperation](_types_.iooperation.md)): *[Steps](_json_.steps.md)*

*Defined in [json.ts:43](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L43)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`operation` | [IOOperation](_types_.iooperation.md) | null |

**Returns:** *[Steps](_json_.steps.md)*

## Properties

### `Private` decodeValue

• **decodeValue**: *boolean*

*Defined in [json.ts:43](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L43)*

___

### `Private` graph

• **graph**: *[Graph](_json_.graph.md)*

*Defined in [json.ts:37](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L37)*

___

### `Private` inputs

• **inputs**: *Array‹[IOOperation](_types_.iooperation.md)›* = []

*Defined in [json.ts:40](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L40)*

___

### `Private` ioID

• **ioID**: *number*

*Defined in [json.ts:39](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L39)*

___

### `Private` last

• **last**: *number* = 0

*Defined in [json.ts:42](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L42)*

___

### `Private` outputs

• **outputs**: *Array‹[IOOperation](_types_.iooperation.md)›* = []

*Defined in [json.ts:41](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L41)*

___

### `Private` vertex

• **vertex**: *Array‹[BaseStep](_types_.basestep.md)›* = []

*Defined in [json.ts:38](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L38)*

## Methods

###  branch

▸ **branch**(`f`: function): *[Steps](_json_.steps.md)*

*Defined in [json.ts:95](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L95)*

**Parameters:**

▪ **f**: *function*

▸ (`arg`: [Steps](_json_.steps.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [Steps](_json_.steps.md) |

**Returns:** *[Steps](_json_.steps.md)*

___

###  colorFilter

▸ **colorFilter**(`value`: [ColorFilterSRGBValue](_types_.colorfiltersrgbvalue.md)): *this*

*Defined in [json.ts:406](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L406)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [ColorFilterSRGBValue](_types_.colorfiltersrgbvalue.md) |

**Returns:** *this*

___

###  colorFilterAlpha

▸ **colorFilterAlpha**(`value`: number): *[Steps](_json_.steps.md)*

*Defined in [json.ts:355](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L355)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Steps](_json_.steps.md)*

___

###  colorFilterBrightness

▸ **colorFilterBrightness**(`value`: number): *[Steps](_json_.steps.md)*

*Defined in [json.ts:370](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L370)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Steps](_json_.steps.md)*

___

###  colorFilterContrast

▸ **colorFilterContrast**(`value`: number): *[Steps](_json_.steps.md)*

*Defined in [json.ts:388](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L388)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Steps](_json_.steps.md)*

___

###  colorFilterGrayscaleBt709

▸ **colorFilterGrayscaleBt709**(): *[Steps](_json_.steps.md)*

*Defined in [json.ts:320](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L320)*

**Returns:** *[Steps](_json_.steps.md)*

___

###  colorFilterGrayscaleFlat

▸ **colorFilterGrayscaleFlat**(): *[Steps](_json_.steps.md)*

*Defined in [json.ts:333](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L333)*

**Returns:** *[Steps](_json_.steps.md)*

___

###  colorFilterGrayscaleNtsc

▸ **colorFilterGrayscaleNtsc**(): *[Steps](_json_.steps.md)*

*Defined in [json.ts:344](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L344)*

**Returns:** *[Steps](_json_.steps.md)*

___

###  colorFilterGrayscaleRY

▸ **colorFilterGrayscaleRY**(): *[Steps](_json_.steps.md)*

*Defined in [json.ts:309](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L309)*

**Returns:** *[Steps](_json_.steps.md)*

___

###  colorFilterInvert

▸ **colorFilterInvert**(): *[Steps](_json_.steps.md)*

*Defined in [json.ts:298](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L298)*

**Returns:** *[Steps](_json_.steps.md)*

___

###  command

▸ **command**(`value`: string): *[Steps](_json_.steps.md)*

*Defined in [json.ts:434](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L434)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[Steps](_json_.steps.md)*

___

###  constrain

▸ **constrain**(`constraint`: [Constrain](_types_.constrain.md)): *[Steps](_json_.steps.md)*

*Defined in [json.ts:74](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`constraint` | [Constrain](_types_.constrain.md) |

**Returns:** *[Steps](_json_.steps.md)*

___

###  constrainWithin

▸ **constrainWithin**(`width`: number, `height`: number): *[Steps](_json_.steps.md)*

*Defined in [json.ts:84](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |
`height` | number |

**Returns:** *[Steps](_json_.steps.md)*

___

###  copyRectangle

▸ **copyRectangle**(`f`: function, `coordinates`: [DrawExactImageToCoordinates](../interfaces/_types_.drawexactimagetocoordinates.md), `fromX`: number, `fromY`: number): *this*

*Defined in [json.ts:416](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L416)*

**Parameters:**

▪ **f**: *function*

▸ (`args`: [Steps](_json_.steps.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [Steps](_json_.steps.md) |

▪ **coordinates**: *[DrawExactImageToCoordinates](../interfaces/_types_.drawexactimagetocoordinates.md)*

▪ **fromX**: *number*

▪ **fromY**: *number*

**Returns:** *this*

___

###  cropWhiteSpace

▸ **cropWhiteSpace**(`data`: [CropWhitespace](_types_.cropwhitespace.md)): *[Steps](_json_.steps.md)*

*Defined in [json.ts:214](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L214)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [CropWhitespace](_types_.cropwhitespace.md) |

**Returns:** *[Steps](_json_.steps.md)*

___

###  decode

▸ **decode**(`operation`: [IOOperation](_types_.iooperation.md)): *this*

*Defined in [json.ts:62](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`operation` | [IOOperation](_types_.iooperation.md) |

**Returns:** *this*

___

###  distort

▸ **distort**(`w`: number, `h`: number, `hint`: [ConstrainHints](_types_.constrainhints.md) | null): *this*

*Defined in [json.ts:466](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L466)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`w` | number | - |
`h` | number | - |
`hint` | [ConstrainHints](_types_.constrainhints.md) &#124; null | null |

**Returns:** *this*

___

###  drawImageExactTo

▸ **drawImageExactTo**(`f`: function, `coordinates`: [DrawExactImageToCoordinates](../interfaces/_types_.drawexactimagetocoordinates.md), `blend`: [CompositingMode](../enums/_types_.compositingmode.md), `hint`: [ConstrainHints](_types_.constrainhints.md)): *this*

*Defined in [json.ts:102](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L102)*

**Parameters:**

▪ **f**: *function*

▸ (`arg`: [Steps](_json_.steps.md)): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [Steps](_json_.steps.md) |

▪ **coordinates**: *[DrawExactImageToCoordinates](../interfaces/_types_.drawexactimagetocoordinates.md)*

▪ **blend**: *[CompositingMode](../enums/_types_.compositingmode.md)*

▪ **hint**: *[ConstrainHints](_types_.constrainhints.md)*

**Returns:** *this*

___

###  encode

▸ **encode**(`operation`: [IOOperation](_types_.iooperation.md), `decodeData`: [Preset](_types_.preset.md)): *[Steps](_json_.steps.md)*

*Defined in [json.ts:283](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L283)*

**Parameters:**

Name | Type |
------ | ------ |
`operation` | [IOOperation](_types_.iooperation.md) |
`decodeData` | [Preset](_types_.preset.md) |

**Returns:** *[Steps](_json_.steps.md)*

___

###  execute

▸ **execute**(): *Promise‹Object›*

*Defined in [json.ts:121](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L121)*

**Returns:** *Promise‹Object›*

___

###  executeCommand

▸ **executeCommand**(`commandValue`: string, `input`: [IOOperation](_types_.iooperation.md), `output`: [IOOperation](_types_.iooperation.md)): *Promise‹any›*

*Defined in [json.ts:445](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L445)*

**Parameters:**

Name | Type |
------ | ------ |
`commandValue` | string |
`input` | [IOOperation](_types_.iooperation.md) |
`output` | [IOOperation](_types_.iooperation.md) |

**Returns:** *Promise‹any›*

___

###  expandCanvas

▸ **expandCanvas**(`data`: [ExpandCanvas](_types_.expandcanvas.md)): *[Steps](_json_.steps.md)*

*Defined in [json.ts:236](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L236)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [ExpandCanvas](_types_.expandcanvas.md) |

**Returns:** *[Steps](_json_.steps.md)*

___

###  fillRect

▸ **fillRect**(`data`: [FillRect](_types_.fillrect.md)): *[Steps](_json_.steps.md)*

*Defined in [json.ts:225](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L225)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [FillRect](_types_.fillrect.md) |

**Returns:** *[Steps](_json_.steps.md)*

___

###  flipHorizontal

▸ **flipHorizontal**(): *[Steps](_json_.steps.md)*

*Defined in [json.ts:247](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L247)*

**Returns:** *[Steps](_json_.steps.md)*

___

###  flipVertical

▸ **flipVertical**(): *[Steps](_json_.steps.md)*

*Defined in [json.ts:258](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L258)*

**Returns:** *[Steps](_json_.steps.md)*

___

###  region

▸ **region**(`regionData`: [Region](_types_.region.md) | [RegionPercentage](_types_.regionpercentage.md)): *[Steps](_json_.steps.md)*

*Defined in [json.ts:204](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L204)*

**Parameters:**

Name | Type |
------ | ------ |
`regionData` | [Region](_types_.region.md) &#124; [RegionPercentage](_types_.regionpercentage.md) |

**Returns:** *[Steps](_json_.steps.md)*

___

###  rotate

▸ **rotate**(`rotate`: [Rotate180](_types_.rotate180.md) | [Rotate270](_types_.rotate270.md) | [Rotate90](_types_.rotate90.md)): *[Steps](_json_.steps.md)*

*Defined in [json.ts:193](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`rotate` | [Rotate180](_types_.rotate180.md) &#124; [Rotate270](_types_.rotate270.md) &#124; [Rotate90](_types_.rotate90.md) |

**Returns:** *[Steps](_json_.steps.md)*

___

###  rotate180

▸ **rotate180**(): *[Steps](_json_.steps.md)*

*Defined in [json.ts:171](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L171)*

**Returns:** *[Steps](_json_.steps.md)*

___

###  rotate270

▸ **rotate270**(): *[Steps](_json_.steps.md)*

*Defined in [json.ts:182](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L182)*

**Returns:** *[Steps](_json_.steps.md)*

___

###  rotate90

▸ **rotate90**(): *[Steps](_json_.steps.md)*

*Defined in [json.ts:160](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L160)*

**Returns:** *[Steps](_json_.steps.md)*

___

###  watermark

▸ **watermark**(`operation`: [IOOperation](_types_.iooperation.md), `watermarkOption`: [WatermarkOption](../interfaces/_types_.watermarkoption.md)): *[Steps](_json_.steps.md)*

*Defined in [json.ts:269](https://github.com/imazen/imageflow-node/blob/8d7450b/lib/json.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`operation` | [IOOperation](_types_.iooperation.md) |
`watermarkOption` | [WatermarkOption](../interfaces/_types_.watermarkoption.md) |

**Returns:** *[Steps](_json_.steps.md)*
