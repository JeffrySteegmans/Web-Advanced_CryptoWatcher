function formatEuro(value) {
  return Math.round(value * 100) / 100;
}

function getFirstProperty(obj){
  return obj[Object.keys(obj)[0]];
}