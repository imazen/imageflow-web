---
key: 9
title: Related Projects
permalink: /related_projects/
options: nolanding
excerpt: What else is out there?

---

### [libvips](https://github.com/jcupitt/libvips) 

> libvips is a 2D image processing library. Compared to similar libraries, libvips runs quickly and uses little memory. libvips is licensed under the LGPL 2.1+.
>
> It has around 300 operations covering arithmetic, histograms, convolutions, morphological operations, frequency filtering, colour, resampling, statistics and others. It supports a large range of numeric formats, from 8-bit int to 128-bit complex. It supports a good range of image formats, including JPEG, TIFF, PNG, WebP, FITS, Matlab, OpenEXR, PDF, SVG, HDR, PPM, CSV, GIF, Analyze, DeepZoom, and OpenSlide. It can also load images via ImageMagick or GraphicsMagick.

libvips is ImageMagick's primary competitor. It is much, much faster (almost as fast as imageflow for less-common operations). It's also great at reducing RAM usage. John Cupitt's approach to security is far more rigorous than what I've seen from ImageMagick.  Like ImageMagick, its origins weren't in the server space, but rather for offline use. Since being adopted by lovell/sharp, it's seen a lot more attention to security. That said, the visual quality doesn't yet meet our standards, and the codebase size makes it challenging to audit. Linking to ImageMagick does make the default configuring less secure. It's not reccomended for in-process use: 

@jcupitt, the author, has this advice for using any imaging library:

> I would say the solution is layered security. 
>
> * Only enable the load libraries you really need. For example, libvips will open microscope slide images, which most websites will not require.
* Keep all the image load libraries patched and updated daily.
* Keep the image handling part of a site in a sandbox: a separate process, or even a separate machine, running as a low-privilege user.
* Kill and reset the image handling system regularly, perhaps every few images. 

Nearly all imaging libraries were designed as offline toolkits for processing trusted image data, accumulating years of features and attack surface area before being moved to the server. Image codecs have an even worse security record than image processing libraries, yet released toolkit binaries often include outdated and vulnerable versions.
We feel John's advice should be applied to any software not initially designed with malicious data in mind, which includes ImageMagick, GraphicsMagick, LibGD, FreeImage, and OpenCV.

## [ImageMagick](https://www.imagemagick.org/)

> ImageMagick® is a software suite to create, edit, compose, or convert bitmap images. It can read and write images in a variety of formats (over 200) including PNG, JPEG, JPEG-2000, GIF, TIFF, DPX, EXR, WebP, Postscript, PDF, and SVG. Use ImageMagick to resize, flip, mirror, rotate, distort, shear and transform images, adjust image colors, apply various special effects, or draw text, lines, polygons, ellipses and Bézier curves.

We love ImageMagick and use it regularly in our test suites (but not on our servers).

ImageMagick's support for over 200 codecs and thousands of operations make it impossible to secure. Within 8 days after [ImageTragick](https://imagetragick.com) was patched, [another similar vulnerability was found](https://security-tracker.debian.org/tracker/CVE-2016-5118). This category of vulnerability exsits because ImageMagick was designed for power, not security. A responsibly written homepage for ImageMagick would explain its design choices and recommend sandboxed use on the server. At the time of this writing, ImageMagick can still be trivially exploited, and [has many unpatched vulnerabilities](https://security-tracker.debian.org/tracker/source-package/imagemagick). 49 CVEs and counting.

## [ImageResizer](https://imageresizing.net)

ImageResizer's FastScaling tech was the foundation for Imageflow's rendering engine (although we've since improved it significantly). 

ImageResizer 4 is tied to Windows codec APIs. It can't even run on Windows Server Core, since GDI+ is missing. 

Imageflow will be the foundation for ImageResizer 5, and offer massive performance improvements.

## [LibGD](https://libgd.github.io/)

LibGD is the default image toolkit used by most PHP content management systems. The current release, 2.1, has the following disqualifications for our use cases:

* No color management
* 31-bit instead of 32-bit color. 
* Error handling requires global state
* Incorrect rendering algorithms (We improved image scaling, but breaking API changes would be needed to go farther)
* API ergonomics lend themselves to incorrect usage.









Imageflow priorities: security, image quality, and speed. Strictly in that order. 

* **It isn't trying to secure 1.3 million lines of code, just 10 thousand or so.**
* It's faster than everything else. 
* It's got a minimal API designed to bind elegantly to any host language. Global state precludes most libraries from integrating with .NET
* It's using 7th gen image scaling. 

## Why not just contribute to existing libraries?

We have. 
We dramatically improved image scaling in LibGD (now landed in PHP!). 
We brought FreeImage to Github and added modern CI and package management. 
We regularly share techniques with lib-vips and ImageMagick.NET

But these libraries are bound by APIs that are simply unsuitable for fast web-focused image handling. We can't fix LibGD's error management, nor FreeImage's performance, lib-vips surface area, or ImageMagick's security-last approach and 1.25 million line codebase. 




----

