import fetch from "node-fetch";
const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-6.200000&lon=106.816666&exclude=minutely,hourly&appid=23ca1b005abcc60a70957e143d069dbe";

const ApaBole = (n) => {
  let res = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      res += "ApaBole ";
    } else if (i % 3 == 0) {
      res += "Apa ";
    } else if (i % 5 == 0) {
      res += "Bole ";
    } else {
      i += " ";
      res += i;
    }
  }
  return res;
};

const fetchData = async () => {
  let response = await fetch(url);
  let data = await response.json();
  let temp = data.daily.map((d) => {
    return {
      dt: d.dt,
      temp: d.temp.day,
    };
  });
  for (let i = 0; i < temp.length; i++) {
    let res = new Date(temp[i].dt * 1000).toDateString() + " ";
    let suhu = temp[i].temp - 273.15;
    res += suhu.toFixed(2) + "°C";
    console.log(res);
  }
};

fetchData();
console.log(ApaBole(100));
