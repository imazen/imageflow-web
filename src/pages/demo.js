import React, { useState } from "react";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

export default function () {
  const [query, setQuery] = useState("");
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col col--9">
            <div className="row">
              <h1>Result</h1>
            </div>
            <img
              src={`https://imageflow-now-two.now.sh/api/imageflow/s3/us-west-1/imageflow-vercel/test.jpg?${query}`}
            />
          </div>
          <div className="col col--3">
            <div className="row">
              <h1>Enter Query</h1>
            </div>
            <div className="row">
              <textarea
                rows={10}
                className="textarea"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              >
                {query}
              </textarea>
              <div className="row">
                <h2>Common Operation</h2>
              </div>
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
