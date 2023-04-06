async function init() {
  let rustApp = null;
  
  try {
    rustApp = await import("../pkg");
  } catch (e) {
    console.error(e);
    return;
  }
  console.log(rustApp);

  const input = document.getElementById("upload");
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    let base64 = fileReader.result.replace(/^data:(.*;base64,)?/, "");
    console.log(input.files[0]);
    console.log(base64);
  };

  input.addEventListener("change", () => {
    fileReader.readAsDataURL(input.files[0]);
  });
}

init();
