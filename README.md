# Grafiko: Image Effects Web App

Grafiko is an image editor that applies a grayscalling effect to PNG images. 

The app is implemented with Rust and compiled into WebAssembly, using the 'wasm-bindgen' crate to generate a JavaScript API that runs the Rust-generated WebAssemply code.

![captures_chrome-capture-2023-3-26](https://user-images.githubusercontent.com/42308135/234749076-9a4c95bd-d711-406f-a2bc-c6148b278cad.png)


🔗 [Open live Demo](https://grafiko-image-effects-webpack-js-rust.vercel.app/)

## Tech Stack

- JavaScript
- HTML/CSS
- Rust
- Crate libraries:
  - wasm-bindgen
  - base64
  - image
- Webpack

## Features

- Image base64 encoding/decoding
- Image buffering
- Grayscalling effect

## Screenshot

![captures_chrome-capture-2023-3-26 (1)](https://user-images.githubusercontent.com/42308135/234752041-325a8e1d-a6f6-4f90-910f-0b999a460fdd.png)

## Installation

First, clone the project and open it with Visual Studio Code:

```bash
git clone https://github.com/javigong/grafiko-image-effects-webpack-js-rust.git

cd grafiko-image-effects-webpack-js-rust

code .
```

Finally, install the npm dependencies and run the application:

```bash
npm install

npm run serve
```

Now the application is running on http://localhost:8080 🚀

## Deployment details

Grafiko Web App deployed using Vercel: 

[https://grafiko-image-effects-webpack-js-rust.vercel.app/](https://grafiko-image-effects-webpack-js-rust.vercel.app/)
