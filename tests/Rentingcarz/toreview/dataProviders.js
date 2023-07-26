const ciudades = [ 
    {
      city: "Los Angeles, California",
      airport: "Los Angeles Airport, Los Angeles, CA."      
    },
    {
      city: "Miami, Florida"      
    },
    {
      city: "San Francisco, California"      
    },
    {
      city: "Orlando, Florida"      
    },
    {
      city: "Honolulu, Hawaii"      
    },
    {
      city: "Madrid, Spain",
      airport: "Madrid Barajas Airport, Madrid, SP."      
    },
    {
      city: "Paris, France",
      airport: "Charles de Gaulle Airport, Paris, FR."     
    },
    {
      city: "Barcelona, Spain"      
    },
    {
      city: "Roma, Italy",
      airport: "Roma Fiumicino Airport, Rome, IT."      
    },
    {
      city: "Lisboa, Portugal"      
    },
    {
      city: "Bogotá, Cundinamarca"      
    },
    {
      city: "Cartagena de Indias, Bolivar"      
    },
    {
      city: "Medellín, Antioquia"      
    },
    {
      city: "Cali, Valle del Cauca"      
    },
    {
      city: "Santa Marta, Magdalena"      
    },
    {
      city: "Lima, Perú",
      airport: "Lima - J Chavez International."      
    },
    {
      city: "Ciudad de Panamá, Panamá"      
    },
    {
      city: "Buenos Aires, Argentina",
      airport: "Buenos Aires, Ezeiza International Airprt."      
    },
    {
      city: "Rio de Janeiro, Brazil"      
    },
    {
      city: "Santiago de Chile, Chile",
      airport: "Santiago de Chile - Arturo Merino Benitz."      
    },
    {
      city: "San Jose, Costa Rica"      
    },
    {
      city: "Cancun, Mexico"      
    },
    {
      city: "Vancouver, Canada"      
    },
    {
      city: "Washington, EE. UU."      
    },
    {
      city: "Tegucigalpa, Honduras"      
    },
    {
      city: "Okinawa, Japón"      
    },
    {
      city: "Sydney, Australia"      
    },
    {
      city: "Dubai, United Arab Emirates"      
    },
    {
      city: "Berlin, Germany"      
    },
    {
      city: "London, United Kingdom"      
    }
  ];      

const airports = [
  { city: 'Los Angeles, California', airport: 'Los Angeles Airport, Los Angeles, CA.' },
  { city: 'Madrid, Spain', airport: 'Madrid Barajas Airport, Madrid, SP.'},
  { city: 'Paris, France', airport: 'Charles de Gaulle Airport, Paris, FR.' },
  { city: 'Roma, Italy', airport: 'Roma Fiumicino Airport, Rome, IT.',  },
  { city: 'Lima, Perú', airport: 'Lima - J Chavez International.' },
  { city: 'Buenos Aires, Argentina', airport: 'Buenos Aires, Ezeiza International Airprt.' },
  { city: 'Santiago de Chile, Chile', airport: 'Santiago de Chile - Arturo Merino Benitz.' },
  { airport: 'Hartsfield Jackson Airport, Atlanta, GA.'  },
  { airport: 'O´Hare Airport, Chicago, IL.' },
  { airport: 'Dallas Airport, Dallas, TX.' },
  { airport: 'Denver Airport, Denver, CO.' },
  { airport: 'Frankfurt d el Meno Airport, Frankfurt,DE.' },
  { airport: 'Sao Paulo - Guarulhos International.' },
  { airport: 'JFK International Airport, New York City, NY.' },
  { airport: "Newark Liberty Int'l Airport, Newark, NJ" },
  { airport: "Kansas City Int'l Airport, Kansas City, MO"}
];

const isos = [
              {iso: "LAX"}, {iso: "MIA"}, {iso: "SFO"}, {iso: "ORL"}, {iso: "HNL"}, {iso: "MAD"}, { iso: "CDG"},
              {iso: "BCN"}, {iso: "ROM"}, {iso: "LIS"}, {iso: "BOG"}, {iso: "CTG"}, {iso: "MDE"}, {iso: "CLO"},
              {iso: "SMR"}, {iso: "LIM"}, {iso: "PTY"}, {iso: "EZE"}, {iso: "RIO"}, {iso: "SCL"}, {iso: "SJO"},
              {iso: "CUN"}, {iso: "YVR"}, {iso: "DCA"}, {iso: "TGU"}, {iso: "OKA"}, {iso: "SYD"}, {iso: "DXB"},
              {iso: "BER"}, {iso: "LON"}, {iso: "FCO"}, {iso: "ATL"}, {iso: "ORD"}, {iso: "DFW"}, {iso: "DEN"},
              {iso: "FRA"}, {iso: "GRU"}, {iso: "JFK"}, {iso: "EWR"}, {iso: "MCI"}
];
   

const env = [{
                name: "Development",
                url: ""
            }, 
            {
                name: "ProductionESP",
                url: "https://www.rentingcarz.com/es"
            },
            {
                name: "ProductionENG",
                url: "https://www.rentingcarz.com/en"
            },
            {
                name: "TestENG",
                url: "https://ohara-webapp.vercel.app/en"
            },
            {
                name: "TestESP",
                url: "https://ohara-webapp.vercel.app/es"
            }]


const API_URL = 'https://api-suggest.agentcars.com/suggest?query=mia&lang=es-MX'

const xhr = new XMLHttpRequest();

function onRequestHandler(){
  if(this.readyState === 4 && this.status === 200){
    console.log(this.response)
  }
}

xhr.addEventListener('load', onRequestHandler());
xhr.open('GET', `${suggest}`)
xhr.send()