
function getWeather(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = {
        Bangalore: "Sunny, 30°C",
        Mumbai: "Rainy, 25°C",
        Delhi: " Foggy, 18°C"
      };
      if (data[city]) resolve(data[city]);
      else reject("City not found");
    }, 2000);
  });
}


async function showWeather(city) {
  console.log(`Fetching weather for ${city}...`);
  try {
    let weather = await getWeather(city);
    console.log(`Weather in ${city}: ${weather}`);
  } catch (error) {
    console.log("Error:", error);
  }
}

showWeather("Bangalore");
showWeather("Hyderabad");
