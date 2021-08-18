# SuperTeam Creator

This App will let you create a Team of 6 characters, 3 heroes and 3 villains, and it will keep track in real time of the collective powerstats (intelligence, strength, etc.) of your team.

Characters of Neutral alignment are also acceptable, but without exceeding a maximum of 6 characters in total.

## Technical Specs

#### State

The State is managed using React-Redux.

#### Routes

Instead of using multiple Routes with React-Router, this App uses a single URL with conditional rendering to display what the user needs to see.

#### Layout

The Layout of the UI is built upon Bootswatch, a slightly customized version of Bootstrap 4, found here https://bootswatch.com/ (The theme for this app is Bootswatch Lux).

#### User Authentication

Authentication had to be performed outside of React, since I couldn't find a way to use React together with Bootstrap 4's dependency to JQuery, therefore Formik wasn't used.

#### API

When you search for a character, the App looks it up in the following API: https://superheroapi.com

## How to Run

After downloading/cloning this repo, open a terminal within its main folder and run "npm install", followed by "npm start"
