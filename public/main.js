async function init() {
  let rustApp = null;

  try {
    // import wasm from the pkg folder
    rustApp = await import("../pkg/index.js");
  
    console.log(rustApp.length());

    const input = document.getElementById("upload");
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      let base64 = fileReader.result.replace(
        /^data:image\/(png|jpeg|jpg);base64,/,
        ""
      );
      let image = rustApp.grayscale(base64);
    };

    input.addEventListener("change", () => {
      fileReader.readAsDataURL(input.files[0]);
    });
  } catch (e) {
    console.error(e);
    return;
  }
}

init();
