import { InputTS } from "../../types/input";
import * as C from "./styles";

export const Input = ({ value, setSearch }: InputTS) => {
  return (
    <C.InputArea>
      <input
        type="text"
        placeholder="Search by Country...."
        value={value}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={e => setSearch(e.target.value)}>
        <option value="Sort by" disabled selected>{" "}Sort by</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>

      </select>
    </C.InputArea>
  );
};
