const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(countries => displayCountries(countries))
};

loadCountries()

const countryContainer = document.getElementById('country-container');

const displayCountries = dataOfData => {
    dataOfData.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col-md-3')

        const flag = document.createElement('img');
        flag.classList.add('img-fluid')
        flag.src = data.flags.png;
        div.appendChild(flag)

        const h3 = document.createElement('h3');
        h3.innerText = data.name.official; 
        div.appendChild(h3);

        const h5 = document.createElement('h5');
        h5.innerText = `-- ${data.capital}`;
        div.appendChild(h5);


        countryContainer.appendChild(div)
    });
}
