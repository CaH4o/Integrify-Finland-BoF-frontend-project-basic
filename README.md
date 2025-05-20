# Visited Сountries App 🌍

## Name of the project

**The basic final project for the frontend module:** Visited Сountries App

## Demo

[Click to view the live demo](https://cah4o.github.io/Integrify-Finland-BoF-frontend-project-basic/)

## Tech Stack

- **HTML** and **CSS**
- **React** with **TypeScript**
- **Redux** (with Async Thunk)
- **React Router**
- **Material UI**
- **REST API**
- **LocalStorage**

## Description

The Visited Countries App enables users to:

- Browse a full list of countries fetched from a REST API
- Mark countries as _visited_ or _favorites_
- Filter countries by **language**, **continent**, or **region**
- Search and sort country lists
- View details such as currency, time zone, and population
- Toggle between **light and dark** themes
- Navigate through pages using **React Router**

All state management is handled with Redux and enhanced by asynchronous Thunks for API calls. The application also stores user preferences in localStorage to ensure data persistence.

## 💡 Learning Outcomes

By building this project, I:

- Strengthened my ability to work with **React** and **Redux**
- Learned how to integrate and manage data from a **REST API** using **extra reducers** and **async Thunk**
- Applied **React Router** for routing and prop management
- Gained practical experience creating responsive interfaces with **Material UI**

## Instructions (by the Academy)

### General

Fork this repo, then clone the **fork** to your machine and start working on it. You can open a pull request as soon as possible (no need to wait until finished)
For styling, you can use whatever css solution you want: css, scss, Material UI, etc.
You need to install the css library yourself.

### Step 1

- Fetch all the countries and return the data from [countries APIs](https://restcountries.com/). Display the data on the screen
- Given a country name as argument, returns the data about that country from [countries APIs](https://restcountries.com/).

### Step 2

- Render the data of all the countries (from Step 1) in a table, you can use html table tag, or component library like Material UI
- Make sure to split the table into smaller components: `TableHead`, `TableBody`, `TableRow`

### Step 3

- Integrate react router into your project and create 2 pages: `home`, and `country`
- Homepage will contain the countries table that we created above
- Country page will render the data about one specific country only
- When a user click on the name of the country in the table, they will be routed to the `country` page

### Step 4

- Set up all the redux boilerblate for the project
- Everything related to redux stays in one folder: reducers, store
- Think about what reducer you're going to make and write them accordingly
- Move the state that contains all countries to redux store

### Step 5

Take your time to implement the following features:

- Implement a search bar to search for a country
- Add/remove the countries to/from favorite list using Redux
- Sort the table based on name, region, etc.
- Maker sure the favorite list is saved in local storage to persist across refreshes of the page.

## References

Homepage:
![homepage](media/home.png)

Country page:
![country page](media/country.png)
