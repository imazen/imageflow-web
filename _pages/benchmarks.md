---
key: 11
title: Benchmarks
permalink: /benchmarks/
options: nolanding
excerpt: Benchmark Imageflow with YOUR data.

---


### Benchmarks via GNU Parallel

After creating a prototype Rust command-line tool (which you can [now download for 64-bit platforms](https://www.kickstarter.com/projects/njones/imageflow-respect-the-pixels-a-secure-alt-to-image/posts/1598662)), I was able to perform an apples-to-apples comparison between ImageMagick and Imageflow. [Raw benchmark results can be found here](https://gist.github.com/nathanaeljones/3c8e3600bfd5e440ecde670239d366dd).

This benchmark was created with version [f05efb8](https://github.com/imazen/imageflow/commit/f05efb89f993827936693e98d39adb31057ec270) using the benchmark script [wrappers/server/bench.sh](https://github.com/imazen/imageflow/blob/f05efb89f993827936693e98d39adb31057ec270/wrappers/server/bench.sh). The benchmark was run on a 3.6Ghz 4-core [Intel Xeon E3-1275 v5 SkyLake](https://gist.github.com/nathanaeljones/1a4394f994a542957f89a674ec83312b). 

These results were slightly better than those previouly published, with Imageflow clocking in at over 17x ImageMagick's throughput. 

At this point, I'm confident about stating a 17x speedup when scaling [this 5104x3380 image](https://s3-us-west-2.amazonaws.com/imageflow-resources/test_inputs/u1.jpg) down to 200x200, and we would expect other users to see similar gains on Xeon hardware.  

We encourage pull requests to enhance our performance suite and discover cases where perf can be improved. 

### Benchmarks via Ruby 

**Update: My workstation is back online! See above**

Until my Xeon workstation is back online, I can't produce perfectly accurate benchmarks, so I'm using the last set I generated. This tests throughput of various tools when using optimal settings for image quality. ImageMagick is compiled with HDRI to prevent banding (but also has OpenMP enabled for performance). [Raw output here](https://gist.github.com/nathanaeljones/7808d4ba10b8a6f8d3d30e5c8e14b47a), [related discussion](https://github.com/jcupitt/libvips/issues/416).

The two input images are [5104x3380](https://s3-us-west-2.amazonaws.com/imageflow-resources/test_inputs/u1.jpg) and [4000x2590](https://s3-us-west-2.amazonaws.com/imageflow-resources/test_inputs/u6.jpg). Each is downscaled to a 400px wide jpeg in the linear light space. 

![](/images/bench1.png)

This is just one benchmark, and it's quite possible that it's flawed. So far, none of our experiments have shown Imageflow to be slower than libvips or ImageMagick, but it may likewise be unreasonable to assume a 17x speedup across the board. 
