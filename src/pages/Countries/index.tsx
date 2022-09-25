import * as C from "./styles";
import { Input } from "../../components/input";
import { useEffect, useState } from "react";
import { CountriesTS } from "../../types/Countries";
import { CountryItem } from "../../components/CountryItem";
import { api } from "../../api";

export const Countries = () => {
  const [countries, setCountries] = useState<CountriesTS[]>([]);
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllCountries();
  }, [])
  const getAllCountries = async () => {
    setLoading(true);
    let countries = await api.getCountries();
    setCountries(countries);
    console.log(countries);
    setLoading(false);
  };

  const lowerSearch = search.toLowerCase()

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(lowerSearch) || country.region.toLowerCase().includes(lowerSearch))


  return (
    <C.CountriesArea>
      <Input 
          value={search}
          setSearch={setSearch}
      />
      <div className="countries">
        {loading && <div className="">Loading...</div>}
        {!loading &&
          filteredCountries.map((item) => (
            <CountryItem
              name={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
              flag={item.flags.png}
            />
          ))}
      </div>
    </C.CountriesArea>
  );
};
