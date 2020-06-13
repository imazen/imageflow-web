## Faster websites and apps

Serving optimized and correctly sized images is the fastest way to a quicker, more profitable site or app. 60% of website bytes are from images<sup>[1]</sup>. 

Imageflow edits and optimizes images so quickly you can do it on-demand. No need to manually generate every size/format combination of every image.

If you're using ImageMagick, switch to `imageflow_tool` and get higher-quality images with smaller file sizes &mdash; up to [17x faster](https://github.com/imazen/imageflow/tree/master/docker/imageflow_bench_ubuntu20#imageflow-benchmarking-image-based-on-ubuntu-2004).

Most people prefer on-demand image processing, as it greatly simplifies web development. 

<div style="background-color:white;">
<img src="https://www.imageflow.io/images/imageflow-responsive.svg" alt=""/> <img src="https://www.imageflow.io/images/edit-url.gif" alt="url editing" />
</div>

<span style="font-size:60%"><sup>[1]</sup>According to the HTTP Archive, 60% of the data transferred to fetch a web page is images composed of JPEGs, PNGs and GIFs.</span>

## What else can it do?

Imageflow can automatically crop away whitespace, apply sharpening, fix white balance, add watermarks, adjust contrast/saturation/brightness, make images transparent or opaque, rotate, flip, crop, resize, constrain, smart encode, and [more](https://docs.imageflow.io/).

All operations are designed to be fast enough for on-demand use. 

[Imageflow.NET Server](https://github.com/imazen/imageflow-dotnet-server) and [imageflow-server](https://github.com/imazen/imageflow) allow you to add a [query string command](https://docs.imageflow.io/querystring/introduction.html) to the end of image URLs, which allows for remarkable sophisticated processing. 

## See the difference

Unlike most image processing tools, Imageflow processing images in linear light. This means that image highlights are not destroyed when the image is down-scaled. Compare Imageflow (left) with other tools (right).

![imageflow](https://s3.amazonaws.com/resizer-web/pluginexamples/snowing_300_linear.jpg) ![other tools](https://s3.amazonaws.com/resizer-web/pluginexamples/snowing_300_srgb.jpg)

## License

Imageflow is 100% Open Source Software. You can use it freely under the terms of the [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html). 

We also offer [commercial licenses](https://imageresizing.net/pricing) if you do not like the AGPLv3. 