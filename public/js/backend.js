const pressureInput = document.getElementById("pressureInput");
const latitudeInput = document.getElementById("latitudeInput");
const longitudeInput = document.getElementById("longitudeInput");
const monthInput = document.getElementById("monthInput");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", async () => {
  const pressure = Number(pressureInput.value);
  const latitude = Number(latitudeInput.value);
  const longitude = Number(longitudeInput.value);
  const month = Number(monthInput.value);
  if (!(latitude >= -90 && latitude <= 90))
    return alert("wrong latitude entered");
  if (!(longitude >= -180 && longitude <= 180))
    return alert("wrong longitude entered");
  if (!(month >= 1 && month <= 12)) return alert("wrong month entered");
  const response = await fetch(`/api/sendData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pressure,
      latitude,
      longitude,
      month,
    }),
  });
  const result = await response.json();
  console.log(result);
});

// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("loaded");
// });
