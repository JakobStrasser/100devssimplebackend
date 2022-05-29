document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const city = document.querySelector("#cityinput").value.toLowerCase();
  const res = await fetch(`/api?city=${city}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#timezone").textContent = "Destination timezone: " + data.timezone
  const date = new Date();
  const offset = -date.getTimezoneOffset();
  const offsetString = offset > 0 ? "GMT+"+offset/60 : "GMT"+offset/60;
  document.querySelector("#localtimezone").textContent = "Your timezone: " + offsetString;
}