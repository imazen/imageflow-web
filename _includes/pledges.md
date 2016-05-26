
## Our pledge to Photographers.

**We will treat your art with respect.** Image operations are often lossy, but we expend tremendous effort into discovering and creating the least-lossy implementations. **Most visual artefacts you see in images today are entirely avoidable.**

We seek to "always do the right thing" for image quality and accuracy - by default - for all image types. While the jpeg format has been compared to a photocopier, we will try to reduce the loss at every stage of the pipeline (often with custom codec enhancements), as well as by using strategies that reason about decoder hints, signal-to-noise ratio changes, and document type in order to tune encoder parameters optimally.

**If you can see a difference between our result and Adobe Lightroom's, it's a bug.**

## Our pledge to DevOps.

**Security is our non-negotiable top-priority.** We have automated valgrind testing of our test suite, Coverity scans, and aggressively reduce the size and complexity of our code so it can be reasoned about with ease. We will likely begin incorporating Rust into the codebase in order to have provable memory safety and correctness for the most intricate components. We aim to make in-process imaging safe and fast for everyone.

Our unrivaled efficiency on commodity hardware means you can slash power consumption and (for image-heavy organizations) likely turn off the majority of your cloud servers. 

**We guarantee you a single binary for libimageflow,** with no dependencies other than libc (if that). We hope to achieve the same for imageflow-server. **Every commit is tested on Linux, Mac, and Windows.** Robust cross-platform builds are crucial, and **we have embraced [Conan] to handle native package management.**

## Our pledge to Designers.

Inconsistent color profiles can break an otherwise harmonious and shade-perfect design. We transform all inbound artwork into the universal sRGB color space so your designs will match on every display, in every browser.

## Our pledge to Developers.

We seek to present you with the most simple and intuitive APIs possible without sacrificing security or correctness. **Intelligent default behavior** will help you create correct systems without requiring deep understanding of compression algorithm implementation quirks, discrete math, or signal processing. 
APIs evolve, and abilities grow, so we are providing **an evolvable JSON API within libimageflow itself.**

## Our pledge to Contributors.

If you are creating open-source bindings for libimageflow or clients for imageflow-server, we will provide you with as much technical support as we can. 

We will offer extensibility through codec plugins and new image operation definitions, so you can design your ideal solution if the defaults aren't working and you don't want to fork the project.

We will not ask you to sign agreements that take away your rights. Our CLA is based on Apache's, and only grants us new rights - it does not take away any of yours.

## Our pledge to your Business.  

We will offer commercial licenses for any need: OEM redistribution, SaaS usage, Enterprise-wide usage. If you don't think your case is covered, call us, and we'll help you.

We offer public access to our source code and strive to make builds simple and easy so your employees can make changes if they need to.

Our focus on security and performance reduces your risks and costs. Malicious images are a common vector for viruses and attacks. We can help make that risk become miniscule. 

If our Kickstarter funding exceeds $130,000 USD, we will offer consultation and support contracts for imageflow after the Kickstarter as well as during. 

Clearer product images lead to more sales. Smaller file sizes make faster websites, and faster websites lead to more sales. Images are often 70% of a website's weight. If we can save you half of that, how much faster can customers access your product or service? An investment in your website's performance is an investment in your business.















