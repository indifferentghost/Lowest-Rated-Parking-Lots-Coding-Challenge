import axios from "axios";
import { useCallback, useState } from "react";
import { Search } from "../components/search";
import { BusinessProvider } from "../components/business";
import { CardList } from "../components/cardlist";

function HomePage() {
  return (
    <main>
      <BusinessProvider>
        <Search />
				<CardList />
      </BusinessProvider>
    </main>
  );
}

export default HomePage;
