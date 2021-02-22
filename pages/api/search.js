import axios from "axios";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      /** @todo TD 022121 - find the acutal parameters on req */
      const params = new URLSearchParams(req.url.split("?")[1]);
      const location = params.get("location");

      const url = `https://api.yelp.com/v3/businesses/search?term=parking%20lot&location=${location}`;

      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API}`,
        },
      });

      const sortedBusinesses = data?.businesses?.sort((b1, b2) => {
        // ( number of reviews * rating ) / (number of reviews + 1)
        const b1score = (b1.review_count * b1.rating) / (b1.review_count + 1);
        const b2score = (b2.review_count * b2.rating) / (b2.review_count + 1);
        return b2score - b1score;
      });

      res.status(200).json(sortedBusinesses);
    }
  } catch (error) {
    console.log(error.response.status, error.message);

    res
      .status(error.response.status || 500)
      .json({ error: error.message || "internal server error" });
  }
}
