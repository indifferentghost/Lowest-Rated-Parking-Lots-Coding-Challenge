import axios from "axios";
import { useCallback, useState } from "react";
import { useBusiness } from "./business";

export function Search() {
  /** @todo TD - 022121 rename location to prevent overlapping
   * from global location object
   */
  const [location, setLocation] = useState("");
  const { setBusinesses } = useBusiness();

  /**
   * @todo TD - 022121 see if a useCallback is nessisary
   */
  const onSearch = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const { data } = await axios.get(`/api/search?location=${location}`);
        setBusinesses(data);
      } catch (e) {
        console.error(e);
      }
    },
    [location]
  );
  return (
    <form onSubmit={onSearch}>
      <input value={location} onChange={(e) => setLocation(e.target.value)} />
      <input type="submit" />
    </form>
  );
}
