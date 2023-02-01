const fetchBtn = document.getElementById("fetch"),
submitBtn = document.getElementById("submit"),
locationInput = document.getElementById("location-input"),
  iframe = document.querySelector("iframe"),
  weatherContainer = document.getElementById("weather-container"),
  weatherContainer1 = document.getElementById("weather-container1"),
  baseApiUrl = "https://api.openweathermap.org/data/2.5/weather";

  
const locationPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, (error) => {
        console.error('Error getting location:', error);
        reject(error);
    });
});


const renderWeatherContainer = (weather) => {
    weatherContainer.style.display = 'block';
    // create elements to display the weather data
    const elements = [
      {
        label: "Location",
        data: weather.name,
      },
      {
        label: "Latitude",
        data: weather.coord.lat,
      },
      {
        label: "Longitude",
        data: weather.coord.lon,
      },
      {
        label: "Timezone",
        data: weather.timezone / 3600,
      },
      {
        label: "Offset Standard",
        data: weather.timezone / 3600,
      },
      {
        label: "Offset Standard Seconds",
        data: weather.timezone,
      },
      {
        label: "Offset Daylight Saving",
        data: weather.timezone / 3600 + (weather.timezone % 3600) / 3600,
      },
      {
        label: "Offset Daylight Saving Seconds",
        data: weather.timezone + (weather.timezone % 3600),
      },      
      {
        label: "Country",
        data: weather.sys.country,
      },
      {
        label: "City",
        data: weather.name,
      },
    ];

    elements.forEach((weatherObj) => {
      const div = document.createElement("div");
      const label = document.createElement("span");
      const val = document.createElement("span");

      label.textContent = weatherObj.label;
      val.textContent = weatherObj.data;

      div.appendChild(label);
      div.appendChild(val);
      weatherContainer.appendChild(div);
    });
}

const renderWeatherDetails = async(lat, long) => {
    // fetch the weather details using the API
    const url = `${baseApiUrl}?lat=${lat}&lon=${long}&appid=98fefb1e26b52c5109dabaa88d3e247a`;
    const res = await fetch(url);

    const data = await res.json();

    console.log("weather details", data);

    renderWeatherContainer(data);
}

const fetchUserLocation = async () => {
    const data = await locationPromise;
    console.log("location", data);

    const lat = data.coords.latitude;
    const long = data.coords.longitude;

    const src = `https://maps.google.com/maps?z=15&output=embed&q=${lat}, ${long}`;

    renderWeatherDetails(lat, long);
}
 fetchUserLocation();




 const renderWeatherContainer1 = (weather) => {
  weatherContainer1.style.display = 'block';
  // create elements to display the weather data
  const elements = [
    {
      label: "Location",
      data: weather.name,
    },
    {
      label: "Latitude",
      data: weather.coord.lat,
    },
    {
      label: "Longitude",
      data: weather.coord.lon,
    },
    {
      label: "Timezone",
      data: weather.timezone / 3600,
    },
    {
      label: "Offset Standard",
      data: weather.timezone / 3600,
    },
    {
      label: "Offset Standard Seconds",
      data: weather.timezone,
    },
    {
      label: "Offset Daylight Saving",
      data: weather.timezone / 3600 + (weather.timezone % 3600) / 3600,
    },
    {
      label: "Offset Daylight Saving Seconds",
      data: weather.timezone + (weather.timezone % 3600),
    },      
    {
      label: "Country",
      data: weather.sys.country,
    },
    {
      label: "City",
      data: weather.name,
    },
  ];

  elements.forEach((weatherObj) => {
    const div = document.createElement("div");
    const label = document.createElement("span");
    const val = document.createElement("span");

    label.textContent = weatherObj.label;
    val.textContent = weatherObj.data;

    div.appendChild(label);
    div.appendChild(val);
    weatherContainer1.appendChild(div);
  });
}


 const renderWeatherDetails1 = async(lat, long) => {
  // fetch the weather details using the API
  const url = `${baseApiUrl}?lat=${lat}&lon=${long}&appid=98fefb1e26b52c5109dabaa88d3e247a`;
  const res = await fetch(url);

  const data = await res.json();

  console.log("weather details", data);

  renderWeatherContainer1(data);
}

const fetchUserLocation1 = async () => {
  const data = await locationPromise;
  console.log("location", data);

  const lat = data.coords.latitude;
  const long = data.coords.longitude;

  const src = `https://maps.google.com/maps?z=15&output=embed&q=${lat}, ${long}`;

  renderWeatherDetails1(lat, long);
}


submitBtn.addEventListener("click", fetchUserLocation1);
/*
const fetchBtn = document.getElementById("fetch"),
submitBtn = document.getElementById("submit"),
//locationInput = document.getElementById("location-input"),
  iframe = document.querySelector("iframe"),
  weatherContainer = document.getElementById("weather-container"),
  weatherContainer1 = document.getElementById("weather-container1"),
  baseApiUrl = "https://api.openweathermap.org/data/2.5/weather";

  const cityInput = document.getElementById("city-input");


  
const locationPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, (error) => {
        console.error('Error getting location:', error);
        reject(error);
    });
});


const renderWeatherContainer = (weather) => {
    weatherContainer.style.display = 'block';
    // create elements to display the weather data
    const elements = [
      {
        label: "Location",
        data: weather.name,
      },
      {
        label: "Latitude",
        data: weather.coord.lat,
      },
      {
        label: "Longitude",
        data: weather.coord.lon,
      },
      {
        label: "Timezone",
        data: weather.timezone / 3600,
      },
      {
        label: "Offset Standard",
        data: weather.timezone / 3600,
      },
      {
        label: "Offset Standard Seconds",
        data: weather.timezone,
      },
      {
        label: "Offset Daylight Saving",
        data: weather.timezone / 3600 + (weather.timezone % 3600) / 3600,
      },
      {
        label: "Offset Daylight Saving Seconds",
        data: weather.timezone + (weather.timezone % 3600),
      },      
      {
        label: "Country",
        data: weather.sys.country,
      },
      {
        label: "City",
        data: weather.name,
      },
    ];

    elements.forEach((weatherObj) => {
      const div = document.createElement("div");
      const label = document.createElement("span");
      const val = document.createElement("span");

      label.textContent = weatherObj.label;
      val.textContent = weatherObj.data;

      div.appendChild(label);
      div.appendChild(val);
      weatherContainer.appendChild(div);
    });
}

const renderWeatherDetails = async(lat, long) => {
    // fetch the weather details using the API
    const url = `${baseApiUrl}?lat=${lat}&lon=${long}&appid=98fefb1e26b52c5109dabaa88d3e247a`;
    const res = await fetch(url);

    const data = await res.json();

    console.log("weather details", data);

    renderWeatherContainer(data);
}

const fetchUserLocation = async () => {
    const data = await locationPromise;
    console.log("location", data);

    const lat = data.coords.latitude;
    const long = data.coords.longitude;

    const src = `https://maps.google.com/maps?z=15&output=embed&q=${lat}, ${long}`;

    renderWeatherDetails(lat, long);
}
 fetchUserLocation();




 const renderWeatherContainer1 = (weather) => {
  weatherContainer1.style.display = 'block';
  // create elements to display the weather data
  const elements = [
    {
      label: "Location",
      data: weather.name,
    },
    {
      label: "Latitude",
      data: weather.coord.lat,
    },
    {
      label: "Longitude",
      data: weather.coord.lon,
    },
    {
      label: "Timezone",
      data: weather.timezone / 3600,
    },
    {
      label: "Offset Standard",
      data: weather.timezone / 3600,
    },
    {
      label: "Offset Standard Seconds",
      data: weather.timezone,
    },
    {
      label: "Offset Daylight Saving",
      data: weather.timezone / 3600 + (weather.timezone % 3600) / 3600,
    },
    {
      label: "Offset Daylight Saving Seconds",
      data: weather.timezone + (weather.timezone % 3600),
    },      
    {
      label: "Country",
      data: weather.sys.country,
    },
    {
      label: "City",
      data: weather.name,
    },
  ];

  elements.forEach((weatherObj) => {
    const div = document.createElement("div");
    const label = document.createElement("span");
    const val = document.createElement("span");

    label.textContent = weatherObj.label;
    val.textContent = weatherObj.data;

    div.appendChild(label);
    div.appendChild(val);
    weatherContainer1.appendChild(div);
  });
}


 const renderWeatherDetails1 = async(lat, long) => {
  // fetch the weather details using the API
  const url = `${baseApiUrl}?lat=${lat}&lon=${long}&appid=98fefb1e26b52c5109dabaa88d3e247a`;
  const res = await fetch(url);

  const data = await res.json();

  console.log("weather details", data);

  renderWeatherContainer1(data);
}
*/
/*const fetchUserLocation1 = async () => {
  const data = await locationPromise;
  console.log("location", data);

  const lat = data.coords.latitude;
  const long = data.coords.longitude;

  const src = `https://maps.google.com/maps?z=15&output=embed&q=${lat}, ${long}`;

  renderWeatherDetails1(lat, long);
}


submitBtn.addEventListener("click", fetchUserLocation1);
*/



/*


const fetchLocation = async (city) => {
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=98fefb1e26b52c5109dabaa88d3e247a`;
  const res = await fetch(geocodeUrl);
  const data = await res.json();

  if (data.status === "OK") {
    const lat = data.results[0].geometry.location.lat;
    const long = data.results[0].geometry.location.lng;

    const src = `https://maps.google.com/maps?z=15&output=embed&q=${lat}, ${long}`;


    renderWeatherDetails1(lat, long);
  } else {
    console.log("Please enter a correct city name");
  }

}

submitBtn.addEventListener("click", fetchLocation(cityInput));


*/