---
key: 5
title: Kickstarter Rewards
permalink: /kickstarter/
options: nolanding
excerpt: June 1st, 2016

---

**Imageflow is open-source software which scales, edits, and optimizes images.** It's similar to our existing software, [ImageResizer](https://imageresizing.net), but is faster, produces better results, and is not bound to the Windows API. Imageflow supports Linux, Mac, and Windows – and can be used from any programming language. 

Imageflow is the first solution to offer uncompromising security and visual quality - but it also **trounces competitors in benchmarks**. It lets millions of websites and applications fix the [weakest link in their server security](https://imagetragick.com/) and will enable new ventures that require **instant, on-the-fly image processing**.

Read our [pledge to photographers, devops, designers, developers, contributors, and your business](https://www.imageflow.io/our_pledges/). 

There are two components to Imageflow: imageflow-server and libimageflow.  

![](/images/imageflow-features.svg)

### imageflow-server

Imageflow-server can be deployed to the cloud in just a few clicks, and can be used by editing URLs in your browser (right) or by using the REST APIs. Imageflow-server sends the right number of pixels based on your device size (left), and can cut load time in half for responsive websites that haven't yet implemented responsive images. Reducing site load time is often the cheapest way to boost sales and SEO ranking.

![](/images/imageflow-responsive.svg) &nbsp; &nbsp; &nbsp; &nbsp;  ![](/images/edit-url.gif)

With imageflow-server, you can map prefixes to different backend storage locations, like S3 or other HTTP servers. If you've been putting off moving to responsive images, imageflow-server will help make the transition painless.

For large deployments, you can fully offload all imaging operations to separate servers.

![](/images/imageflow-server-advanced.svg)

### libimageflow

libimageflow is the image library you wish your stack shipped with. It's correct, fast, safe, and has an evolvable API. It creates compact and sharp files. Its API was designed to work with even the most troublesome multi-tenant host languages. 

![](/images/libimageflow-direct.svg)


## What problems does Imageflow solve?

#### Tragick Security

Image toolkits and codecs are a notorious exploitation vector.
ImageMagick is intended to be used in a sandbox. In practice, it is most often run by privileged server accounts. A recent string of vulnerabilities in ImageMagick was given the [ImageTragick](https://imagetragick.com) moniker to raise awareness prior to the hacking of many sites. Even after the ImageTragick patches, ImageMagick still has unfixed remote code execution vulnerabilities which are equally easy to exploit.  
**Solution**  
Imageflow puts security first by retaining a small and testable codebase, being cautious with dependencies, and making Coverity scans and Valgrind testing an automated part of the development process.

#### Abysmal Visual Quality

Most visual artefacts you see in images today are entirely avoidable. Decades of hacky approximations, bad mathematical and color space reasoning, and legacy compression behaviors combine to establish a very low bar for image quality.  
**Solution**  
With correct math and highly optimized encoders, Imageflow sets a new bar for image quality. We rebuilt everything from the ground up, performing exhaustive testing of inputs, lookup tables, and tuning parameters.

#### Bloated file size

Images make up the majority of bytes on most websites. Images usually average 2-3x larger than necessary for the same perceptual quality.  
**Solution**  
Imageflow focuses on a smaller set of highly tuned codecs, and should outperform ImageMagick by a significant margin across all file types. We're seeking licensing agreements for libimagequant and other best-in-class algorithms as well.

#### Slow Processing

Basic ImageMagick operations can take seconds per image. For on-demand imaging in ecommerce, there's a hard latency ceiling before you start losing customers, and it's a far lower than 1500ms.  
**Solution**  
There's no valid reason your web server can't deliver image quality on par with Adobe Lightroom, and do so in **8 to 200 milliseconds.** Imageflow enables that scenario. We don't need to shy away from on-the-fly image processing; we just need to focus on it and invest in our tools.

### How does Imageflow relate to ImageResizer? 

* Imageflow is ImageResizer's future. Without it, ImageResizer can't become cross-platform, run on .NET Core, or be deployed on Windows Server Core.
* The Kickstarter 18-month transitional support contract (for both ImageResizer and Imageflow) is the only way to get paid ImageResizer support.

![](/images/imageresizer-imageflow.svg)

Your support in backing Imageflow will make ImageResizer 5 a reality. And if you just can't wait, it's possible to use libimageflow from C# today, if you're willing to P/Invoke.

### What are the benefits of using Imageflow?

Our promise with Imageflow is to deliver security, image quality, and speed – in that order. 

* libimageflow can be used directly over FFI by any mainstream language. The second component, imageflow-server, speaks HTTP – and any networked device can use it. A human can use it from their web browser by adding ?width=200 to the image URL (or any of 30 other commands).
* libimageflow has ~10x the throughput of ImageMagick, yet puts security first. It is correct, fast, and has an evolvable JSON API. Imageflow doesn’t try to be ImageMagick; it supports only the core image operations and web-safe image formats needed by most applications and websites.
* imageflow-server offers a JSON API – You can POST a JSON operation list or graph along with multiple inputs and outputs, and the results are returned to you. libimageflow can accurately predict the cost for any operation, which permits ideal work redistribution and load balancing.
* Imageflow supports Linux, Mac, and Windows.


### Why Back our Kickstarter?

* Licenses are **41%, 56%, and 85% off**. You'll pay up to **7 times more if you buy later**.
* For just $600 (instead of $2,900) you can sell a hosted version of imageflow-server. This ultimate redistribution and SaaS license is restricted to B Corps or small businesses that meet the revenue limits.
* If you're an [ImageResizer](https://imageresizing.net) user, the [Transitional Support Contract is the **only way to purchase paid support**](/resizer_support).
* It's the best (and cheapest) way to get 1-on-1 consultation and support. 
* It's the fastest way to remove the liability of ImageMagick from your infrastructure. Support and transition assistance is heavily discounted via the Kickstarter.


**Imageflow can't happen without your support**. We've invested 4 years and over $100,000 in solving the hardest problems specifically for Imageflow. We now face a long list of clearly defined tasks with known solutions, but need your help to complete Imageflow and bring it to to your platform and tools.

### Goals

It's crucial that we ensure a **sustainable model for security maintenance**, so Imageflow will remain copylefted until we reach a funding level that can guarantee long-term support for you, our customers. **Your help in promoting this Kickstarter is essential to its success**. 

* **$50,000** (expenses only) Proceeds will cover our hardware, software, and hosting expenses for the next year of development, and fund collaboration with some of the world's best compression and optimization experts. *At this funding level, Imazen covers all in-house labor costs* and Imageflow will be licensed as AGPLv3 with commercial options.
* **$125,000** - Support contracts for Imageflow will be made available on an ongoing basis, even after the Kickstarter ends. Official C# bindings & Core CLR support will also be guaranteed at this level.
* **$200,000** - We create official PHP bindings and integrate libimageflow with Wordpress. Imageflow becomes GPLv2 + GPLv3 dual licensed so it can be distributed with Wordpress. *GPL licensing would make commercial SaaS licenses redundant.*
* **$500,000** - We immediately relicense Imageflow as MIT/Apache 2 so **it can be redistributed with every platform, language, tool and CMS**. This level funds extended codec research and optimization, with potential 2x performance increases. *Apache 2 licensing would make all commercial licenses redundant*. 


![Imageflow stretch goals](/images/imageflow-stretch-goals.svg)

### Delivery schedule

All backers get early access to binary releases and regular updates about the project. We're developing with transparency, in the open, at [github.com/imazen/imageflow](https://github.com/imazen/imageflow).

* **July 15th, 2016 (alpha release of libimageflow)** You'll be able to experiment with a command-line version of Imageflow before the end of July. This will let you verify libimageflow meets your needs - and give us immediate feedback if it doesn't. 
* **July 1st, 2016** ImageResizer to Imageflow Transitional Support Contracts begin (18mo, Platinum tier).
* **September 1st, 2016** Clock starts on timed licenses (if we have a usable beta – otherwise the clock starts when a usable beta is released).  
* **October 1st, 2016** Imageflow Platinum Plus Integration Contracts begin (12mo, Platinum Plus).
* **November 1st, 2016** Imageflow Silver Support Contracts begin (6mo).
* **August 1st, 2017 (stable release of imageflow-server and libimageflow)** Official Ruby and Node bindings for libimageflow will be available at the this time. 
* **October 1st, 2017** Everyone has their license keys, and license key enforcement is enabled.
* **December 1st, 2017** We deliver official C# bindings (if we hit the $125k stretch goal). 
* **January 1st, 2017** We deliver official PHP bindings (if we hit the $200k stretch goal). 

## Reward Tiers

#### $25 or more

> Early access to binary releases. Expect libimageflow and imageflow-tool alphas within 45 days. 
> 
> The right to use imageflow-server and libimageflow in your closed-source non-commercial (no ads or commerce) website. Use in open-source apps and sites is always free.
>
> 2 non-commercial wildcard domain licenses (1 for staging, 1 for production).
> 
> 3-year license validity. Closed-source redistribution and SaaS usage not included. Est. retail $185.
>
> Pledge $25 more in any reward tier, and this will be provided as an add-on.  
> 
> Pledge any multiple of $25 and we will provide the respective number of non-commercial licenses!

Estimated delivery:
October 2017

#### $215 or more

> Early access to binary releases. 
>
> The right to use imageflow-server and libimageflow in your closed-source website.
>
> 2 commercial wildcard domain licenses (1 for staging, 1 for production).
>
> 2-year license validity.  Closed-source redistribution and SaaS usage not included.  Est. retail $498.
 
Estimated delivery:
October 2017

#### $498 or more
*limited supply available!

> Enterprise-wide license to libimageflow and imageflow-server. No domain count restriction!
>
> Closed-source redistribution and SaaS usage not included. 2-year license validity. Est. retail $849.

Estimated delivery:
August 2017

#### $600 or more

> Kickstarter exclusive for B Corps and small businesses!
>
> This includes an enterprise-wide license, SaaS license, and OEM redistribution license.
>
> These licenses are valid for **two years** or until your organization exceeds a certain amount in gross quarterly revenue, whichever comes first.
>
> VC-backed startup quarterly limit: $20,000.   
> Small business or self-funded startup: $100,000.   
> Certified B Corp: $200,000.
>
> Includes 1 hour of consultation.

Estimated delivery:
August 2017


#### $2,900 or more
*limited supply available!

> Imageflow Silver Support Contract - 6mo
>
> We'll provide you with 10 hours of consultation and integration assistance. 
> 
> Unlimited business-hours support. 1 emergency support incident.
>
> Support contract duration shall begin November 1st, 2016 (or up to 6 months later by customer request), and shall not exceed six months in duration without renewal. 
> 
> Includes 1-year OEM redistribution, SaaS, and enterprise-wide licenses.

Estimated delivery:
November 2016

#### $8,900 or more

> ImageResizer to Imageflow Transitional Support Contract (Platinum Tier, 18 months)
>
> This includes simultaneous ImageResizer and Imageflow support, and is currently the only way to purchase support for ImageResizer.
>
> 20 hours of transition assistance and consulting are included.
>
> Unlimited business-hours support. 1 emergency support incident.
> 
> Support contract duration shall begin on July 1, 2016 (or up to 3 months later at customer request) and shall not exceed 18 months. 
> 
> Includes 2-year OEM redistribution, SaaS, and enterprise-wide licenses to both Imageflow and ImageResizer.

Estimated delivery:
July 2016

#### $10,000

> Imageflow Platinum Plus Integration Contract - 12mo
>
> Get an end-to-end managed integration of imageflow into your product, service, or infrastructure. Includes up to 60 hours of **on-site** or remote consultation and integration assistance. 
>
> Unlimited business-hours support and 10 emergency support incidents.
>
> Includes 2-year SaaS, OEM redistribution, and enterprise-wide licenses.
>
> Support contract duration shall begin October 1st, 2016 (or up to 6 months later by customer request), and shall not exceed twelve months.

Estimated delivery:
Oct 2016

























