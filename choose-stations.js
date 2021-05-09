stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
]

function chooseStations(stations) {
  const goodStations = [];
  
  for (let x = 0; x < stations.length; x++) {
    const capacity = stations[x][1];
    const location = stations[x][2];

    if(capacity >= 20 && (location === "school" || location === "community centre")) {
      goodStations.push(stations[x][0]);
    }
  } return goodStations;
  }

console.log(chooseStations(stations));