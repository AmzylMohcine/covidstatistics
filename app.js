window.onload = () => {
    getCovidstats() 
}

function getCovidstats() {

    
    

    let form  = document.querySelector("form#form") 
    let city = document.getElementById("userinsert")
    document.getElementById('userinsert').innerHTML = city

    if (form) 
    {
        document.addEventListener('submit' , e => { 
        e.preventDefault() ;
       
       
        if (city.value ==="United States") { 
            city.value ="us"
        }

     fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations?country="+city.value+"")
    .then(response => { 
        return response.json()
    })  .then(data => {

        
        console.log("IN")


        let update = data.locations[0].last_updated ; 
        let confirmedCases = data.latest.confirmed ; 
        let deaths = data.latest.deaths;
        let populations = data.locations[0].country_population;


        document.getElementById('country').innerHTML     = city.value
        document.getElementById('cases').innerHTML       = confirmedCases.toLocaleString('en');
        document.getElementById('deaths').innerHTML      = deaths.toLocaleString('en');
        document.getElementById('populations').innerHTML = populations.toLocaleString('en'); 
        document.getElementById('update').innerHTML      = update.substr(0,10) ; 


    }).catch( () => { 
        console.log("Error")
    })


    
    })
    }
    

}