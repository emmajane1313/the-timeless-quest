/* eslint-disable max-len */
import React from "react";
import Document, { NextScript, Html, Main, Head } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @font-face {
              font-family: "NewYork";
              font-display: swap;
              src: url("./fonts/NewYork.otf");
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: "Lemon Milk";
              src: url("./fonts/LEMONMILK-Regular.otf");
              font-weight: normal;
            }
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
