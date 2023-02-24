import { Link } from "react-router-dom";
 
function CountriesList(props) {
  return (
    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
        <div className="list-group">
            {props.countries.map((country) => {
                return <Link key={country.name.common} className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}> <img src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag'></img> {country.name.official}</Link>
            })}
        </div>
    </div>
  );
}
 
export default CountriesList;