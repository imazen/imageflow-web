## What is imageflow?

**[libimageflow](https://www.imageflow.io) is the image library you wish your stack shipped with.** It's correct, fast, safe, and has an evolvable API. It creates compact and sharp files. And its stateless C ABI can work with even the most troublesome multi-tenant host languages, so – you're in luck. Initial bindings will include Ruby and Node. [libimageflow is tested daily on [Linux, Mac, and Windows (x86 and x86\_64 architectures)](https://github.com/imazen/imageflow).  

**imageflow-server exposes a REST API** – an image URL followed by a simple querystring of commands, like `http://server/prefix/image.jpg?width=200&sharpen=30`  You can map prefixes to different backend storage locations, like S3 or other HTTP servers. If you've been putting off moving to responsive images, [imageflow-server](https://www.imageflow.io) will help make the transition painless. [ImageResizer](https://imageresizing.net) already solves this for Windows servers, but is highly coupled to Windows APIs..

**imageflow-server offers a JSON API** – Post JSON operation lists or graphs along with multiple inputs and outputs, and the results are returned to you.

#### Why JSON?

We prototyped Cap'n Proto, but found it too hard to use from the client side. This doesn't rule out a later Cap'n Proto interface, but JSON is easier to use, and is also slightly easier to evolve as our operation portfolio grows and nodes change. 

#### Why do you use an operation graph internally?

A directed acyclic graph permits us to make very advanced optimizations and comprehensions that can assist with encoder and decoder tuning. It also facilitates multi-input and multi-output image jobs. You won't need to construct a adjacency list in JSON unless you actually need those features, though - a linear sequence of operations is all most developers will use. 

#### You're targeting imageflow for inclusion in CDNs and CMSes?

Yes. We're thinking of petabyte scalability; we can make it possible to predict RAM/CPU consumption for any operation before you start it. It's easy to perform perfect load balancing when you have predictive ability. And Imageflow supports high throughput and multi-core systems with very low overhead.

CMSes don't have any great options. Builtin libraries are often fast yet produce poor quality. Adding ImageMagick is an unacceptable security liability. Imageflow can check all the boxes - fast, secure, correct. And unlike [ImageResizer](https://imageresizing.net) – cross-platform and language-agnostic.

#### What does Imageflow do that ImageMagick doesn't?

The right things by default. Imageflow makes it hard to screw up your images. Also, Imageflow is 3-10x faster, and that can translate directly into shutting down a majority of your imaging VMs. Smaller files will speed up your website and lower storage costs.

Despite comprising over a million lines of code (counting codecs), ImageMagick's most common usage is straightforward: transform and re-encode web images with optimal quality. A sizable task, but one that merits only a fraction of that codebase.

Focusing exclusively on the transform and re-encode use case permits Imageflow to have a small, auditable codebase. It also frees developer time to spend on mathematical correctness and performance.  

#### What does ImageMagick do that Imageflow doesn't?

Tens of thousands of sophisticated operations that you may need one day, but likely not on your web server.  We put the most useful into Imageflow, but optimize them for deterministic run-time. 

**Excute shell scripts embedded in .svg files.**

ImageMagick is intended to be used in a sandbox. In practice, it is run by priviledged server accounts. . A recent string of vulnerabilities in ImageMagick were given the [ImageTragick](https://imagetragick.com) moniker to raise awareness.

#### What is it like to use libimageflow directly?

If you wanted to use libimageflow directly (instead of via wrapper or abstraction), you would:

1. Create a flow\_context
2. Create two flow\_io objects, for your input and ouptut files.
3. Create a flow\_job, then add the two flow\_io objects to the job.
5. Call flow\_job\_build\_json() with your json command. 
6. Call flow\_destroy(context) to perform all cleanup