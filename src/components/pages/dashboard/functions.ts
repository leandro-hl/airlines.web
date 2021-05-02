const getData = () => {
  const airports = [
    { val: "BA", desc: "Buenos Aires" },
    { val: "UK", desc: "London" },
    { val: "MI", desc: "Miami" }
  ];

  const arrivals = { name: "Arrivals", color: "#313ac4", data: [] };
  const departures = { name: "Departures", color: "#c43a31", data: [] };

  for (let i = 0; i <= 30; i++) {
    const date = new Date(2021, 3, i);

    arrivals.data.push({
      x: date,
      y: Math.floor(Math.random() * (50 - 10)) + 10
    });

    departures.data.push({
      x: date,
      y: Math.floor(Math.random() * (50 - 10)) + 10
    });
  }

  return { airports, data: [arrivals, departures] };
};

export { getData };
