//TABLEAUX
function sunsets(city, country, skyColor, sunColor, seaColor) {
    this.location = {
       city : city,
       country : country
    };
    this.skyColor = skyColor
    this.sunColor = sunColor
    this.seaColor = seaColor
  }
  
  var leHavre = new sunsets('Le Havre', 'french', 'pink', 'yellow', 'blue')
  var castroUrdiales = new sunsets('Castro Urdiales', 'spanish', 'olive-green', 'orange', 'grey')
  var sanFrancisco = new sunsets('San Francisco', 'american', 'orange', 'blue', 'red')
  var hongKong = new sunsets('Hong Kong', 'chinese', 'black', 'yellow', 'violet')
  
  console.log('The sunset in the', leHavre.location.country, 'city of', leHavre.location.city,'is a mix of', leHavre.skyColor,',', leHavre.sunColor,'and', leHavre.seaColor,'.');
  console.log('The sunset in the', castroUrdiales.location.country, 'city of', castroUrdiales.location.city,'is a mix of', castroUrdiales.skyColor,',', castroUrdiales.sunColor,'and', castroUrdiales.seaColor,'.');
  console.log('The sunset in the', sanFrancisco.location.country, 'city of', sanFrancisco.location.city,'is a mix of', sanFrancisco.skyColor,',', sanFrancisco.sunColor,'and', sanFrancisco.seaColor,'.');
  console.log('The sunset in the', hongKong.location.country, 'city of', hongKong.location.city,'is a mix of', hongKong.skyColor,',', hongKong.sunColor,'and', hongKong.seaColor,'.');
  