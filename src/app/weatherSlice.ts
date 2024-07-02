import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherAndTime } from '../app/lib/fetchWeatherAndTime';

interface WeatherState {
  weather: string | null;
  timeMessage: string | null;
  loading: boolean;
}

const initialState: WeatherState = {
  weather: null,
  timeMessage: null,
  loading: false,
};

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async () => {
  const response = await fetchWeatherAndTime();
  return response;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weather = action.payload.initialWeather;
        state.timeMessage = action.payload.initialTimeMessage;
        state.loading = false;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default weatherSlice.reducer;
