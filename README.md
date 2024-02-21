# Bean There, Drank That!

Welcome to Bean There, Drank That! - a coffee shop website showcasing diverse coffee drinks from around the world!

## Overview

Bean There, Drank That is a React web application that provides information about various coffee drinks, allowing users to explore different recipes, regions, and more.

## Features

- Browse a collection of coffee drinks from different regions.
- Search and filter drinks by name.
- Sort coffee drinks' names in alphabetical order
- Add new coffee drinks using the submission form.
- Click a rating for a new coffee drink
- An option to delete an individual coffee drink via id
- (Optional) Explore an ordering service for your favorite drinks.

## Project Structure

The project is structured with the following components:

- `App`: The main component.
- `HomePage`: The landing page of the website.
- `Search`: Component for searching and filtering drinks.
- `NewCoffeeForm`: Form for submitting new coffee drinks.
- `CoffeeList` and `Coffee`: Components for displaying a list of coffee drinks and individual drinks, respectively.
- `SingleCoffeeDetails`: Component for identifying /:id to get a specific coffee's details

### Additional Components (if applicable)

- `Header`: Header component (considered optional).
- `ErrorPage`: Page for handling errors (considered optional).
- `Nav`: Navigation component for linking to specific pages.

## Getting Started

1. Clone this repository.
2. Open a terminal window to open this repository in your code editor
3. Install dependencies: `npm install`
4. Run the application: `npm start` which should open http://localhost:3000
5. Run the JSON server in a new terminal window: `json-server --watch db.json --port 3001`. This will start the JSON server on port 3001 and watch for changes in the db.json file.
6. Access the coffee API on http://localhost:3001/coffee for the JSON server.
   - http://localhost:3000 is fetching from http://localhost:3001/coffee which is required to run the application

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or improvements, please open an issue or create a pull request.

## Authors

- Meaghan Sharrard
- Hanna Negash
- Xen Contreras

## Acknowledgments

- To our WEST-SE-103023 cohort, for their love and passion for coffee that inspired this app.

