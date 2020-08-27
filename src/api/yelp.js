import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer e9uDpcQ_cH7u_SuXC3D8Ip3Y4ekAhhvWN3mfu_N-fgDenIqZSOzYGTyGONQbIJz0dxopI6VqEYO3pbznqCbHHvhnomI9ApyglQJJTfWn0O5h42WGmaFB6CSbaPUIWXYx",
  },
});
