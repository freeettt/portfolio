import axios from "axios";

export const fetchWeather = async (city) => {
   try {
      const response = await axios.get(
         `https://api.weatherapi.com/v1/current.json?key=8889a83ab29f453c81b112057251704&q=Стара%20Вижівка&aqi=yes&lang=uk`
      );
      return response.data;
   } catch (error) {
      console.error(error);
   }
};
