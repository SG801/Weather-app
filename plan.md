# Creating a Weather App with TypeScript

## Planning Steps

1. Set up GitHub repo ✅

2. Create React app via command line - and make a commit to GitHub ✅

3. Create a tree diagram for components and how we would structure the app ✅

4. Build the components front-end:
    - Set up component folders/files in `src` folder ✅
    - Create `SearchForm` component
        - Define `SearchForm.tsx` in the `components` folder. ✅
        - Implement form input and button. ✅
        - Use `useState` to manage input value. ✅
        - Handle form submission and call `onSearch` prop with the entered city. ✅
    - Create `WeatherInfo` component
        - Define `WeatherInfo.tsx` in the `components` folder. ✅
        - Accept `city`, `temperature`, and `description` as props. ✅
        - Display weather data. ✅

5. Implement logic for search form in `App.tsx` and return weather
    - Set up state management in `App.tsx`
        - Define state variables for `weather` and `error`.
    - Fetch weather data from API
        - Use `fetch` to get weather data from OpenWeatherMap.
        - Handle successful response and set weather state.
        - Handle errors by setting an appropriate error message.
    - Render components in `App.tsx`
        - Render `SearchForm` and pass `fetchWeather` function as a prop.
        - Render `WeatherInfo` if weather data is available.
        - Display error message directly if an error occurs.    
    - Error handling in `App.tsx`
        - Handle error state directly within `App.tsx`.
        - Display error message conditionally within `App.tsx`.

6. Add styling to the app
    - Basic styling for layout and components.
    - Is it responsive and can it be used? Test it

7. Test the app
    - Test the inputs for correct weather data display.
    - Test error scenarios to make sure error messages are shown properly.

8. Push changes to GitHub
    - Commit final changes and push to the repo.
