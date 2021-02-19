# Reaktor Warehouse App
Assignment brief for junior developer job application summer 2021

### User Interface Logic: React 
React is obviously a natural choice for this project. I have done multiple projects with it after taking the Fullstackopen course in 2018 and then retaking lately in 2020. I have also done an electron project using it. The group that I was part for the Software Engineering Project course which is one of the biggest one's for bachelor was also made with React. 

### React component structure 

[comment]: <> (MAKE A GRAPHICAL SOLUTION FOR THE STRUCTURE)


### User Interface Styling: Material-UI 
I wanted to reflect the style of design that Reaktor uses with my own personal taste. The goal is to create a minimal, contextual and beautiful design. 
The Product Card is an antithesis to a spreadsheet design that is the gut reaction to what project like this might look like. Omitting all the descriptive titles like Identifer code, name, manufacturer, price etc takes a little bit longer to used to, but the user does it will hopefully reduce anxiety. 

The all category home page shows 3 Product Lists but on a mobile interface it would very simple to just show one instead and the design would scale very well. 

### Features not implemented due to time restraints
Implementing pagination and filtering/search on material ui is quite difficult. This is why I chose to use placeholder search bar to give context to what the app would potentially look like if it went into production. The idea behind this was to show my application design philosophy and its potential. 

### Node backend using json-server that will be deployed to Heroku at [separate repository](https://github.com/rescawen/warehouse-node-backend)  
Uses fetch-json to get the JSON "database" files from bad-api. Actual server is done with json-server since the JSON files were already neatly formatted for one to create routing around them. 

[comment]: <> (EXPLAIN POTENTIAL SOLUTION TO DEALING WITH ERROR FOR MANUFACTURER EMPTY RESPONSES)
