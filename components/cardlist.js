import axios from "axios";
import { useBusiness } from "./business";

export function CardList() {
	const { businesses } = useBusiness()

	// address, an image if available, star rating, review count, and link to the Yelp page.
  return (
    <>
		{businesses.map(business => {
			return (
				<article>
					<h3>{business.name}</h3>
					{business.image_url ? <img src={business.image_url} alt={business.name} /> : null}

					rating: {business.rating}
					review count ${business.review_count}
					<a href={business.url}>Yelp for {business.name}</a>
				</article>
			);
		})}
		</>
  )
}