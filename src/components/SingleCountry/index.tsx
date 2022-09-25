import * as C from "./styles";
import { SingleCountryTS } from "../../types/SingleCountry";
import { Link } from "react-router-dom";

export const SingleCountry = ({
  name,
  nativeName,
  capital,
  population,
  region,
  subregion,
  flag,
  topLevelDomain,
  currencie,
  languages,
  borders,
}: SingleCountryTS) => {
  return (
    <C.CountryData>
      <img src={flag} alt={`flag name:${name}`} />
      <div className="data--area">
        <h1>  {name}</h1>
        <div className="data--firstArea">
          <p><span>Native Name:</span> {nativeName}</p>
          <p><span>Population:</span> {population}</p>
          <p><span>region:</span> {region}</p>
          <p><span>subregion:</span> {subregion}</p>
          {capital && (
            <p><span>Capital:</span>{capital}</p>
          )}
          <p className="toplevel"><span>Top level domain:</span>{topLevelDomain}</p>
          {currencie && (
            <p><span>Currencie:</span>{currencie.map((item) => item.name)}</p>
          )}
          <p><span>Languages:</span>{languages.map((item, index) => (
              <span key={index} className="language">{item.name}</span>
            ))}
          </p>
        </div>
        {borders && (
          <div className="border--area">
            <p>Border Countries:</p>
            <div className="borders">
              {borders.map((item, index) => (
                <Link to={`/code/${item}`} key={index}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </C.CountryData>
  );
};
