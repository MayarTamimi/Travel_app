function updateUi(geoData) {
  // Get the trip details section
  const tripList = document.getElementById("trip-list");

  // Create a new list item for the trip details
  const listItem = document.createElement("li");

  // Create a new HTML structure to display the trip information
  listItem.innerHTML = `
    <h3>${geoData.name}, ${geoData.countryCode}</h3>
    <p>Temperature: ${geoData.currentTemp}°C</p>
    <img src="https://www.weatherbit.io/static/img/icons/${geoData.weatherIcon}.png" alt="Weather Icon" width="50" height="50">
    <p>Days until departure: ${geoData.daysUntil} days</p>
    <img src="${geoData.image}" alt="City Image" width="300" height="200">
  `;

  // Append the new trip details to the trip list
  tripList.appendChild(listItem);
}

export { updateUi };