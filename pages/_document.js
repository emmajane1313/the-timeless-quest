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
                font-family: "alarm clock";
                src: url("./fonts/alarm clock.ttf");
                font-weight: 400;
              }
  
              @font-face {
                font-family: "Alvania";
                src: url("./fonts/Alvania.otf");
                font-weight: 400;
              }

              @font-face {
                font-family: "Berkeley Mono Trial";
                src: url("./fonts/Alvania.otf");
                font-weight: 400;
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
