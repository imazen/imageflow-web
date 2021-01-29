import React, { useState } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

export default function () {
  const [query, setQuery] = useState("");
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <h1 className="heading">Demo for Imageflow Query API</h1>
          <p>
            This demo uses a Vercel function as a middleware between AWS bucket
            and client. The image a manuplated based on the Query String. Vercel
            function uses <Link to={"/imageflow-node"}>imageflow-node</Link>.
          </p>
        </div>
        <div className="row">
          <div className="col col--9">
            <div className="row">
              <h2 className={styles.heading}>Result</h2>
            </div>
            <div style={{ overflow: "auto" }}>
              <img
                src={`https://imageflow-now-two.now.sh/api/imageflow/s3/us-west-1/imageflow-vercel/test.jpg?${query}`}
              />
            </div>
          </div>
          <div className="col col--3">
            <h2 className={styles.heading}>Enter Query</h2>

            <div className="row">
              <textarea
                rows={10}
                className="textarea"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              >
                {query}
              </textarea>

              <h2 className={styles.heading}>Common Operation</h2>

              <div
                class="button button--primary button--block"
                onClick={() => setQuery("width=200&hieght=200")}
              >
                width=200 and hieght=200
              </div>
              <div
                class="button button--primary button--block"
                onClick={() => setQuery("rotate=90")}
              >
                rotate = 90
              </div>
              <div
                class="button button--primary button--block"
                onClick={() => setQuery("crop=10,10,300,300")}
              >
                Crop = 10,10,300,300
              </div>
              <div
                class="button button--primary button--block"
                onClick={() => setQuery("s.grayscale=true")}
              >
                Grayscale
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
