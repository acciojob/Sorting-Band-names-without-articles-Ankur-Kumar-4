let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'A Tajmahal'];

let rev_article = (name) => name.replace( /^(a|an|the)\s+/i, "" );

let finalSpots = touristSpots.map(rev_article).sort().map(val=> 
     touristSpots.filter(str=> str.includes(val))

)

let ul = document.getElementById("bands");

finalSpots.forEach(function(bandName) {
  let li = document.createElement("li");
  li.textContent = bandName;
  ul.appendChild(li);
});





