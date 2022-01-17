let weather = {
    apiKey: "b12e85342271dccccd057405c89fbf91",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey

        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").textContent = " Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").textContent = description;
        document.querySelector(".temp").textContent = temp + "°C";
        document.querySelector(".humidity").textContent = "Humidity: " + humidity + " % ";
        document.querySelector(".wind").textContent = "Wind Speed:" + speed + " KM/H ";

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});