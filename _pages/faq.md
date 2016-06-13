---
key: 200
title: FAQ
permalink: /faq/
options: nolanding
excerpt: Frequently Asked Questions
---




#### What is it like to use libimageflow directly?

If you wanted to use libimageflow directly (instead of via wrapper or abstraction), you would:

1. Create a flow\_context
2. Create two flow\_io objects, for your input and ouptut files.
3. Create a flow\_job, then add the two flow\_io objects to the job.
5. Call flow\_job\_build\_json() with your json command. 
6. Call flow\_destroy(context) to perform all cleanup

#### Why do you use an operation graph internally?

A directed acyclic graph permits us to make very advanced optimizations and comprehensions that can assist with encoder and decoder tuning. It also facilitates multi-input and multi-output image jobs. You won't need to construct a adjacency list in JSON unless you actually need those features, though - a linear sequence of operations is all most developers will use. 