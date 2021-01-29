import React, { useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import AnimatedImage from "../components/AnimatedImage";

const samples = [
  {
    tab: "Command line",
    code: `imageflow_tool v1/build --json examples/export_4_sizes/export_4_sizes.json \\
    --in waterhouse.jpg \\
    --out 1 waterhouse_w1600.jpg \\
          2 waterhouse_w1200.jpg \\
          3 waterhouse_w800.jpg \\
          4 waterhouse_w400.jpg \\
    --response operation_result.json
`,
    language: "bash",
    addtionalComponents: <></>,
  },
  {
    tab: "Querystring",
    code: `/demo_images/tulip-leaf.jpg?w=300&h=300&mode=max`,
    language: "bash",
    addtionalComponents: <></>,
  },
  {
    tab: "Dotnet",
    code: `using (var b = new ImageJob()) {
      await b.Decode(inputStream, true)
              .ConstrainWithin(800, 800)
              .Encode(new StreamDestination(outputStream, false), new WebPLossyEncoder(80))
              .Finish()
              .InProcessAsync();
   }`,
    language: "java",
    addtionalComponents: (
      <>
        <a href="https://github.com/imazen/imageflow-dotnet">
          Install the Imageflow.Net and Imageflow.NativeRuntime.* packages
        </a>
      </>
    ),
  },
  {
    tab: "Dotnet Server",
    code: `app.UseImageflow(new ImageflowMiddlewareOptions()
    .SetMapWebRoot(true)
    .SetMyOpenSourceProjectUrl("https://github.com/my/project"))`,
    language: "java",
    addtionalComponents: (
      <>
        Don't forget to install Imageflow.Server
        <code> donet add package Imageflow.Server </code>
      </>
    ),
  },
  {
    tab: "Nodejs",
    code: `const {
      MozJPEG,
      Steps,
      FromURL,
      FromBuffer,
  } = require('@imazen/imageflow')
  const fs = require('fs')
  
  let step = new Steps(new FromURL('https://jpeg.org/images/jpeg2000-home.jpg'))
      .constrainWithin(100, 100)
      .rotate180()
  step.encode(new FromBuffer(null, 'key'), new MozJPEG(80))
      .execute()
      .then(console.log)
      .catch(console.log)`,
    language: "js",
    addtionalComponents: <></>,
  },
  {
    tab: "Golang",
    code: `package main;

    import (
      "io/ioutil"
    
      imageflow "github.com/imazen/imageflow-go"
    )
    
    func main(){
      step:=imageflow.NewStep()
      data,_:=step
      .Decode(imageflow.NewURL("https://jpeg.org/images/jpeg2000-home.jpg"))
      .ConstrainWithin(400,400)
      .Encode(imageflow.GetBuffer("test"),imageflow.MozJPEG{})
      .Execute()
      ioutil.WriteFile("test_2.jpeg",data["test"],0644)
    }`,
    language: "go",
    addtionalComponents: <></>,
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Imageflow imaging at scale"
    >
      <div
        className={`container ${styles.header}`}
        style={{ textAlign: "center" }}
      >
        <h2>
          Simplify app development with the easiest image manipulation and
          optimization API.
        </h2>
        <p>
          Imageflow is open source, runs on your servers, and is written in Rust
          and C for max performance.
        </p>
      </div>
      <div className="container">
        <ul class="pills">
          {samples.map((sample, i) => (
            <li
              class={`pills__item ${
                i === currentTab ? "pills__item--active" : ""
              }`}
              onClick={() => setCurrentTab(i)}
            >
              {sample.tab}
            </li>
          ))}
        </ul>
        <CodeBlock className={samples[currentTab].language}>
          {samples[currentTab].code}
        </CodeBlock>
        {samples[currentTab].addtionalComponents}
      </div>
      <div className="container" style={{ marginTop: "40px" }}>
        <div class="row">
          <div class="col col--7" style={{ textAlign: "center" }}>
            <p>
              Modify images from the URL and get optimized images in
              milliseconds. Makes responsive images easy! No vendor/cloud lock
              in.
            </p>
            <p>
              No per-image fees. Compatible with almost every cloud and CDN,
              with disk caching available.
            </p>
            <div>Rust Server | .NET 5 Server (extra features)</div>
          </div>
          <div class="col col--5">
            <AnimatedImage />
          </div>
        </div>
      </div>
      <div className={`container ${styles.header}`}>
        <h2>Treat your images right, get a faster site!</h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="col col--3">
            <img className={styles.featureImage} src={"/img/crop.svg"} />
          </div>
          <div class="col col--9">
            <p>
              <p>
                Serving optimized and correctly sized images is the fastest way
                to a quicker, more profitable site or app.
              </p>
              <p>
                <b>60% of website bytes are from images</b>
              </p>
              <p>
                Imageflow optimizes your images with state-of-the art
                compression techniques while preserving image quality. Most
                image resizing tools destroy image highlights, but Imageflow
                resizes in 128-bit linear light and ensures you get the correct
                result every time. See the difference.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className={`container ${styles.header}`}>
        <h2>Single-source imaging simplifies development</h2>
      </div>
      <div className="container">
        <p>
          Upload one authoritative version of an image and let Imageflow produce
          sizes and variants on demand. Source images can reside in blob
          storage, on another server, or on the filesystem. Compatible with
          srcset and {"<picture>"}. Give your users the right image for their
          display every time.
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col col--8">
            <CodeBlock className="html">
              {`<picture>
 <!-- Image source for big screen with webp support -->
      <source media="(min-width:1200px)" srcset="/img.jpg?width=1000">
 <!-- Image source for big screen with png support -->
      <source media="(min-width:1200px)" srcset="/img.jpg?width=1000">
 <!-- Image source for meduim screen with png support -->
      <source media="(min-width:800px)" srcset="/img.jpg?width=700">
 <!-- Image source for small screen with png support -->
      <source media="(min-width:500px)" srcset="/img.jpg?width=400">
 <!-- Fallback incase above sources are not used -->
         <img src="/images/image.jpg?width=400">
</picture>`}
            </CodeBlock>
          </div>
          <div class="col col--4">
            <img src="/img/edit-url.gif" style={{ height: "100%" }} />
          </div>
        </div>
      </div>
      <div className={`container ${styles.header}`}>
        <h2>Over 53 image manipulation commands</h2>
        <p>
          Imageflow can automatically crop away whitespace, apply sharpening,
          fix white balance, add watermarks, adjust
          contrast/saturation/brightness, make images transparent or opaque,
          rotate, flip, crop, resize, constrain, smart encode, and more. Visit
          the docs for more info or check out the JSON and Querystring Demos
        </p>
      </div>
      <div className={`container ${styles.header}`}>
        <h2>Flexible JSON API available when you need more</h2>
        <ul>
          <li>
            Generate multiple image variants in a single job, improving
            executing speed on bulk operations
          </li>
          <li> Combine multiple images in flexible ways.</li>
          <li>Run jobs in-process via language bindings.</li>
        </ul>
      </div>
    </Layout>
  );
}

export default Home;
