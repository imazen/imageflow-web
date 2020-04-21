---
key: 11
title: Benchmarks
permalink: /benchmarks/
options: nolanding
excerpt: Benchmark Imageflow with YOUR data.

---

## 2020 Benchmarks

We've updated our benchmarks to use [hyperfine](https://github.com/sharkdp/hyperfine) and produce more accurate results. We're using the latest version of ImageMagick and libvips that comes with Ubuntu 20.04. 

To make them easy to reproduce, we've provided a [docker image](https://github.com/imazen/imageflow/tree/master/docker/imageflow_bench_ubuntu20). `docker run imazen/imageflow_bench_ubuntu20`

### Scaling 32 17MP jpegs down to 200x200px
| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `parallel "$HOME/bin/imageflow_tool v0.1/ir4 --in {} --out ../bench_out/{.}_200x200.jpg --command width=200&height=200&quality=90" ::: *.jpg` | 373.9 ± 30.8 | 310.0 | 409.8 | 1.00 |
| `parallel "vipsthumbnail --linear --size=200x200  --output=../bench_out/{.}_vips_200x200.jpg[Q=90] {}" ::: *.jpg` | 1002.8 ± 77.2 | 872.0 | 1123.7 | 2.68 ± 0.30 |
| `parallel "convert {} -set colorspace sRGB -colorspace RGB -filter Robidoux -resize 200x200  -colorspace sRGB -quality 90 ../bench_out/{.}_magick_200x200.jpg" ::: *.jpg` | 6555.1 ± 147.6 | 6352.6 | 6794.0 | 17.53 ± 1.50 |
| `parallel "convert {} -set colorspace sRGB -colorspace RGB -filter  Mitchell -distort Resize 200x200  -colorspace sRGB -quality 90 ../bench_out/{.}_magick_ideal_200x200.jpg" ::: *.jpg` | 8657.5 ± 215.2 | 8408.4 | 9105.4 | 23.15 ± 1.99 |

### Scaling 32 17MP jpegs down to 2000x2000px

| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `parallel "$HOME/bin/imageflow_tool v0.1/ir4 --in {} --out ../bench_out/{.}_2000x2000.jpg --command width=2000&height=2000&quality=90" ::: *.jpg` | 1.014 ± 0.092 | 0.892 | 1.172 | 1.00 |
| `parallel "vipsthumbnail --linear --size=2000x2000  --output=../bench_out/{.}_vips_2000x2000.jpg[Q=90] {}" ::: *.jpg` | 2.405 ± 0.019 | 2.373 | 2.449 | 2.37 ± 0.22 |
| `parallel "convert {} -set colorspace sRGB -colorspace RGB -filter Robidoux -resize 2000x2000  -colorspace sRGB -quality 90 ../bench_out/{.}_magick_2000x2000.jpg" ::: *.jpg` | 7.714 ± 0.160 | 7.493 | 7.918 | 7.61 ± 0.71 |
| `parallel "convert {} -set colorspace sRGB -colorspace RGB -filter  Mitchell -distort Resize 2000x2000  -colorspace sRGB -quality 90 ../bench_out/{.}_magick_ideal_2000x2000.jpg" ::: *.jpg` | 12.056 ± 0.427 | 11.552 | 12.759 | 11.89 ± 1.16 |

[More details here](https://github.com/imazen/imageflow/tree/master/docker/imageflow_bench_ubuntu20)


## 2016 Benchmarks

### Benchmarks via GNU Parallel

After creating a prototype Rust command-line tool (which you can [now download for 64-bit platforms](https://www.kickstarter.com/projects/njones/imageflow-respect-the-pixels-a-secure-alt-to-image/posts/1598662)), I was able to perform an apples-to-apples comparison between ImageMagick and Imageflow. [Raw benchmark results can be found here](https://gist.github.com/lilith/3c8e3600bfd5e440ecde670239d366dd).

This benchmark was created with version [f05efb8](https://github.com/imazen/imageflow/commit/f05efb89f993827936693e98d39adb31057ec270) using the benchmark script [wrappers/server/bench.sh](https://github.com/imazen/imageflow/blob/f05efb89f993827936693e98d39adb31057ec270/wrappers/server/bench.sh). The benchmark was run on a 3.6Ghz 4-core [Intel Xeon E3-1275 v5 SkyLake](https://gist.github.com/lilith/1a4394f994a542957f89a674ec83312b). 

These results were slightly better than those previouly published, with Imageflow clocking in at over 17x ImageMagick's throughput. 

At this point, I'm confident about stating a 17x speedup when scaling [this 5104x3380 image](https://s3-us-west-2.amazonaws.com/imageflow-resources/test_inputs/u1.jpg) down to 200x200, and we would expect other users to see similar gains on Xeon hardware.  

We encourage pull requests to enhance our performance suite and discover cases where perf can be improved. 

### Benchmarks via Ruby 

**Update: My workstation is back online! See above**

Until my Xeon workstation is back online, I can't produce perfectly accurate benchmarks, so I'm using the last set I generated. This tests throughput of various tools when using optimal settings for image quality. ImageMagick is compiled with HDRI to prevent banding (but also has OpenMP enabled for performance). [Raw output here](https://gist.github.com/lilith/7808d4ba10b8a6f8d3d30e5c8e14b47a), [related discussion](https://github.com/jcupitt/libvips/issues/416).

The two input images are [5104x3380](https://s3-us-west-2.amazonaws.com/imageflow-resources/test_inputs/u1.jpg) and [4000x2590](https://s3-us-west-2.amazonaws.com/imageflow-resources/test_inputs/u6.jpg). Each is downscaled to a 400px wide jpeg in the linear light space. 

![](/images/bench1.png)

This is just one benchmark, and it's quite possible that it's flawed. So far, none of our experiments have shown Imageflow to be slower than libvips or ImageMagick, but it may likewise be unreasonable to assume a 17x speedup across the board. 
