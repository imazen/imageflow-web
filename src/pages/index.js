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
  },
  {
    tab: "Querystring",
    code: `/demo_images/tulip-leaf.jpg?w=300&h=300&mode=max`,
    language: "bash",
  },
  {
    tab: "Dotnet",
    code: `using Imageflow.Fluent;

    public async void TestGetImageInfo()
    {
        var imageBytes = Convert.FromBase64String(
            "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAAAXRSTlPM0jRW/QAAAApJREFUeJxjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=");
    
        var info = await ImageJob.GetImageInfo(new BytesSource(imageBytes));
        
        Assert.Equal(info.ImageWidth, 1);
        Assert.Equal(info.ImageHeight, 1);
        Assert.Equal(info.PreferredExtension, "png");
        Assert.Equal(info.PreferredMimeType, "image/png");
    }`,
    language: "java",
  },
  {
    tab: "Dotnet Server",
    code: `app.UseImageflow(new ImageflowMiddlewareOptions()
    .SetMapWebRoot(true)
    .SetMyOpenSourceProjectUrl("https://github.com/my/project"));`,
    language: "java",
  },
  {
    tab: "Nodejs",
    code: `const {
      MozJPEG,
      Steps,
      FromURL,
      FromFile,
      FromStream,
      FromBuffer,
  } = require('@imazen/imageflow')
  const fs = require('fs')
  
  let step = new Steps(new FromURL('https://jpeg.org/images/jpeg2000-home.jpg'))
      .constrainWithin(500, 500)
      .branch((step) =>
          step
              .constrainWithin(400, 400)
              .branch((step) =>
                  step
                      .constrainWithin(200, 200)
                      .rotate90()
                      .colorFilterGrayscaleFlat()
                      .encode(new FromFile('./branch_2.jpg'), new MozJPEG(80))
              )
              .copyRectangle(
                  (canvas) =>
                      canvas.decode(
                          new FromStream(fs.createReadStream('./test.jpg'))
                      ),
                  { x: 0, y: 0, w: 100, h: 100 },
                  10,
                  10
              )
              .encode(new FromFile('./branch.jpg'), new MozJPEG(80))
      )
      .constrainWithin(100, 100)
      .rotate180()
  step.encode(new FromBuffer(null, 'key'), new MozJPEG(80))
      .execute()
      .then(console.log)
      .catch(console.log)`,
    language: "js",
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
      .Branch(func(step *imageflow.Steps){
        step
        .ConstrainWithin(200,200)
        .Encode(imageflow.NewFile("test_1.jpg"),imageflow.MozJPEG{})
      }).ConstrainWithin(400,400)
      .Encode(imageflow.GetBuffer("test"),imageflow.MozJPEG{})
      .Execute()
      ioutil.WriteFile("test_2.jpeg",data["test"],0644)
    }`,
    language: "go",
  },
];

const features = [
  {
    title: "Process multiple image",
    imageUrl: "img/multiple.svg",
    description: (
      <>
        Imageflow works on a directed graph for processing multiple images in
        same operations. It allow the use of work done of other images and
        create a branch from there.
      </>
    ),
  },
  {
    title: "Perform complex operations",
    imageUrl: "img/crop.svg",
    description: (
      <>
        Imageflow supports multiple operations like crop, padding and many more.
      </>
    ),
  },
  {
    title: "Resize on fly",
    imageUrl: "img/resize.svg",
    description: <>Resize image on fly using fast query based API.</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

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
            <AnimatedImage />
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
