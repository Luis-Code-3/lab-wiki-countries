import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
 
function CountryDetails(props) {
    const [country, setCountry] = useState({});
    const {id} = useParams();
    

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
        .then((response) => {
          setCountry(response.data);
        })
    }, [id])

    // let foundCountry = props.countries.find((country) => {
    //     return country.alpha3Code === id
    // })



    return (
        <div className="col-7">
            {country.name ?
                  <div>
                      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag'></img>
                      <h1>{country.name.official}</h1>
                      <table className="table">
                      <thead></thead>
                      <tbody>
                          <tr>
                          <td style={{width: '30%'}}>Capital</td>
                          <td>{country.capital[0]}</td>
                          </tr>
                          <tr>
                          <td>Area</td>
                          <td>
                          {country.area} km
                              <sup>2</sup>
                          </td>
                          </tr>
                          <tr>
                          <td>Borders</td>
                          <td>
                              <ul>
                                  {country.borders.map((border) => <li key={border}><Link to={`/${border}`}>{border}</Link></li>)}
                              </ul>
                          </td>
                          </tr>
                      </tbody>
                      </table>
                  </div>
              : <p>Loading....</p>}
        </div>
  );
}
 
export default CountryDetails;

