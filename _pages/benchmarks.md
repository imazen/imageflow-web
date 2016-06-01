---
key: 11
title: Benchmarks
permalink: /benchmarks/
options: nolanding
excerpt: Benchmarks lie. Test with YOUR data.

---


### Benchmarks

Until my Xeon workstation is back online, I can't produce perfectly accurate benchmarks, so I'm using the last set I generated. This tests throughput of various tools when using optimal settings for image quality. ImageMagick is compiled with HDRI to prevent banding (but also has OpenMP enabled for performance). [Raw output here](https://gist.github.com/nathanaeljones/7808d4ba10b8a6f8d3d30e5c8e14b47a), [related discussion](https://github.com/jcupitt/libvips/issues/416).

The two input images are [5104x3380](https://s3-us-west-2.amazonaws.com/imageflow-resources/test_inputs/u1.jpg) and [4000x2590](https://s3-us-west-2.amazonaws.com/imageflow-resources/test_inputs/u6.jpg). Each is downscaled to a 400px wide jpeg in the linear light space. 

![](/images/bench1.png)

This is just one benchmark, and it's quite possible that it's flawed. So far, none of our experiments have shown Imageflow to be slower than libvips or ImageMagick, but it may likewise be unreasonable to assume a 17x speedup across the board. We're rounding down to 10x until we have a comprehensive performance suite. We also don't expect libvips to remain that much slower than Imageflow once it becomes optimized for linear-light scaling. 
