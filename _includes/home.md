## What is imageflow?

**Imageflow is open-source software which scales, edits, and optimizes images.**

Unlike most tools, it does *not* have a visual interface; it is designed to be embedded into software like Wordpress, Ebay, Craigslist, or Facebook. 

**libimageflow can be used directly over [FFI](https://en.wikipedia.org/wiki/Foreign_function_interface) by any mainstream language**. The second component, imageflow-server, speaks HTTP – and any networked device can use it. A human can use it from their web browser by adding `?width=200` to the image URL (or any of 30 other commands). 

**libimageflow has ~10x the throughput of [ImageMagick](https://www.imagemagick.org), yet puts security first**. It is correct, fast, and has an evolvable JSON API. Imageflow doesn't try to be ImageMagick; it supports only the core image operations and web-safe image formats. This focus gives libimageflow a tiny and auditable codebase – yet still have the right features for CMS and CDN use. Unsandboxed ImageMagick is an unacceptable liability for any kind of business. 

libmageflow's stateless C ABI can work with even the most troublesome multi-tenant host languages, and [is tested daily on Linux, Mac, and Windows](https://github.com/imazen/imageflow) with [Travis](https://travis-ci.org)+[Conan](https://conan.io), and [AppVeyor](https://appveyor.com)+Conan. libmageflow uses [Conan for consuming and prouducing native packages](https://conan.io), but we will also publish precompiled binaries for those 3 platforms.  Initial bindings will include Ruby and whichever language receives the most votes from backers by June 28th. **Pledge $5 or more and vote to prioritize your favorite language.**

**imageflow-server exposes a REST API** – an image URL followed by a simple querystring of commands, like `http://server/prefix/image.jpg?width=200&sharpen=30`  You can map prefixes to different backend storage locations, like S3 or other HTTP servers. If you've been putting off moving to responsive images, [imageflow-server](https://www.imageflow.io) will help make the transition painless. [ImageResizer](https://imageresizing.net) already solves this for Windows servers, but is highly coupled to Windows APIs. imageflow-server will run on Linux, Mac, *and* Windows.

**imageflow-server offers a JSON API** – You can POST a JSON operation list or graph along with multiple inputs and outputs, and the results are returned to you. libimageflow can accuractely predict the cost for any operation, which permits ideal work redistribution and load balancing. We designed imageflow with petabyte image collections in mind.

--- 

# Image management is problematic

--------------

#### Tragick Security

Image toolkits and codecs are a notorious exploitation vector. Until a few weeks ago, ImageMagick would execute bash commands written in URLs inside .svg files. 
ImageMagick is intended to be used in a sandbox. In practice, it is most often run by privileged server accounts. A recent string of vulnerabilities in ImageMagick were given the [ImageTragick](https://imagetragick.com) moniker to raise awareness prior to the hacking of many sites.  
**Solution**  
Imageflow puts security first by retaining a small and testable codebase, being cautious with dependencies, and making Coverity scans and Valgrind testing an automated part of the development process.

#### Absymal Visual Quality

Most visual artefacts you see in images today are entirely avoidable. Decades of hacky approximations, bad mathematical and color space reasoning, and legacy compression behaviors combine to establish a very low bar for image quality.  
**Solution**  
With correct math and highly optimized encoders, Imageflow sets a new bar for image quality. We rebuilt everything from the ground up, performing exhaustive testing of inputs, lookup tables, and tuning parameters.

#### Bloated file size

Images make up the majority of bytes on most websites. Images usually average 2-3x larger than neccessary for the same perceptual quality.  
**Solution**  
Imageflow focuses on a smaller set of highly tuned codecs, and should outperform ImageMagick by a significant margin across all file types. We're seeking licensing agreements for libimagequant and other best-in-class algorithms as well.

#### Slow Processing
Basic ImageMagick operations can take seconds per image. For on-demand imaging in ecommerce, there's a hard latency ceiling before you start losing customers, and it's a far lower than 1500ms.  
**Solution**  
There's no valid reason your web server can't deliver image quality on par with Adobe Lightroom, and do so in **8 to 200 milliseconds.** Imageflow enables that scenario. We don't need to shy away from on-the-fly image processing; we just need to focus on it and invest in our tools.


