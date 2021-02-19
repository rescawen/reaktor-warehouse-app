# Reaktor Warehouse App
Assignment brief for junior developer job application summer 2021

## Documentation 

### UI Libraries: React and Material-UI 
React is obviously a natural choice for this project. I have done multiple projects with it after taking the [Full Stack Open](https://fullstackopen.com/en/about/) course in 2018 and then retaking lately in [2020](https://github.com/rescawen/Fall2020Fullstack). I have also done an [Electron project](https://github.com/rescawen/otm-harjoitustyo) using React. The group that I was part of for the Software Engineering Project course in summer of 2019 made one of the most successful project in its history in the form of a [Music Theory MOOC](https://github.com/rage/musiikin-teoria-material) with React. Both of these projects used material UI as well and it really is one of the best free libraries to create beautiful UI.

### Design Philosophy
I wanted to reflect the style of design that Reaktor uses with my own personal taste. The goal is to create a minimal, contextual and beautiful design. 

#### Product Card 

This is an antithesis to a spreadsheet design that is the gut reaction to what project like this might look like. Omitting all the descriptive titles like identifer code, name, manufacturer, price etc will cost the user a little bit of time in the beginning to get used to. Hopefully over time the lack of clutter will pay back in dividends. 

#### Cateogry views

The home page shows 3 Product Lists but on a mobile interface it would very simple to just show one instead and the design would scale very well. 

### Architecture (React component diagram)

[comment]: <> (MAKE A GRAPHICAL SOLUTION FOR THE STRUCTURE)

### Features not implemented due to time restraints
Implementing pagination and filtering/search on material ui is quite difficult. This is why I chose to use placeholder search bar to give context to what the app would potentially look like if it went into production. The idea behind this was to show my application design philosophy and its potential. 

## Node backend using json-server that will be deployed to Heroku at [separate repository](https://github.com/rescawen/warehouse-node-backend)  
Uses fetch-json to get the JSON "database" files from bad-api. Actual server is done with json-server since the JSON files were already neatly formatted for one to create routing around them. 

[comment]: <> (EXPLAIN POTENTIAL SOLUTION TO DEALING WITH ERROR FOR MANUFACTURER EMPTY RESPONSES)
