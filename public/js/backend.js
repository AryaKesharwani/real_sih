const generateButton = document.getElementById("generateButton");
const valuesOutput = document.getElementById("valuesOutput");
const imageViewer = document.getElementById("imageViewer");

generateButton.addEventListener("click", async () => {
  const response = await fetch(`/api/sendData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  console.log(result);
  location.reload();
});

window.addEventListener("DOMContentLoaded", async (event) => {
  const response = await fetch("/data/labels.json");
  const { image_number, speed } = await response.json();
  valuesOutput.innerHTML = `image number: ${image_number}, Speed(Knots) : ${speed}`;
});
