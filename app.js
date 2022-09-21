const loadCountries =() =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data =>displayCountriesName(data) )
}

loadCountries()
const displayCountriesName = data =>{
    // console.log(data)
    const div = document.getElementById('countries-name');
    
    data.forEach(country=>{
        const creatDiv = document.createElement('div');
        creatDiv.classList.add('style')
        creatDiv.innerHTML=`
        <h2>${country.name}</h2>

        <button onclick = "displayDetail('${country.name}')">detail</button>
        `
        div.appendChild(creatDiv)
    })

}

const displayDetail = (name) =>{
    const url = `https://restcountries.com/v2/name/${name}`
    console.log(url)
    fetch(url)
    .then(res =>res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = (data) =>{
    console.log(data)
    const detail = document.getElementById('detail');
    detail.innerHTML=`
    <h4>Name: ${data.name}</h4>
    <h4>Capital: ${data.capital}</h4>
    <img src = "${data.flag}">
    `
}
s