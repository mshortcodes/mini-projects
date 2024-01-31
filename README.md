# Mini Projects

### Table of Contents

-   [About](#about)
    -   [Tools](#tools)
    -   [Design](#design)
    -   [Challenges](#challenges)
    -   [What I Learned](#what-i-learned)
-   [Features](#features)
    -   [To-Do List](#to-do-list)
    -   [Tic-Tac-Toe](#tic-tac-toe)
    -   [Weather App](#weather-app)
    -   [Memory Card Game](#memory-card-game)
    -   [Flashcards](#flashcards)
-   [Getting Started]()
    -   [Prerequisites]()
    -   [Installation]()
-   [Contact]()

# About

Mini Projects consists of 5 projects:

-   To-Do list
-   Tic-Tac-Toe
-   Weather App
-   Memory Card Game
-   Flashcards

<img src='./readme-images/home.png' alt='home page' />

### Tools

<img src='./public/vite.svg' width='100' alt='vite logo' />&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width='100' alt='react logo' />&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width='100' alt='tailwind logo' />

### Design

I originally began working on these projects with vanilla JS and had completed four of them. However, it looked horrible.
I can copy other designs but creating them myself is not my specialty. This is when I realized just diving in coding without a particular design or layout in mind is not the best idea.

So, the design I implemented came from inspiration from a YouTuber I follow, ForrestKnight. He had created a mini-game website which I thought looked great with a minimal design. My projects are different, but the memory card game was also an idea from him.

### Challenges

Nearly everything about these projects was difficult for me. Even though I spent months completing the Meta Front-End Developer Certificate and supplemented that with even more Codecademy certificates, I still found myself constantly stuck.

One of the harder challenges I faced was with the weather app. I had almost no experience fetching data and using an API. Also, I didn't know that in order to search for a location, that location would first need to be converted to longitude and lagitute coordinates which required me to use a geocoding API for that as well.

### What I Learned

While these projects took longer and were harder than I had originally expected, I still enjoyed the process. I found myself working on them before and after work. They didn't seem like work, but were fun. When I got stuck, I first tried my best to figure it myself. If I couldn't, then I used ChatGPT as my main go-to resource. It's very nice having an all-in-one resource instead of me having to search on Google, find the best resource, etc. I had to resort to it many times with questions such as, "How do I use fetch() in js?", "Remind me what useEffect does and its syntax", etc.

This was also my first time using Tailwind and I love it. It makes writing CSS so much easier. I don't have to think of class names, worry about specificity, write out long media queries, etc. I also appreciate how it lets you know the exact CSS it's using when hovering over its classes.

Concepts learned/practiced:

-   Tailwind
-   Toggling with booleans
-   useState, useEffect
-   Data fetching/using an API
-   Conditional rendering/styling
-   Event listening/handling

# Features

### To-Do List

<img src='./readme-images/to-do-list.png' alt='to-do list' />

I got the idea for this project from Google. Its functionality is basic. You can type, add a task, delete the last task in the list, or delete a specific task by clicking the ❌.

Features:

-   enter key event listener/handler
-   click event listener/handler
-   state management

### Tic-Tac-Toe

<img src='./readme-images/tic-tac-toe.png' alt='tic-tac-toe' />

This project was built on from the tic-tac-toe tutorial on react.dev. I went through the tutorial awhile back and thought it would be fun to rebuild it with a better UI and extend it. While some of the logic is from the tutorial, some of it is extended. In this version, I implemented a reset feature which clears the board and resets the game's state. I also made it have conditional rendering for the winning squares so it is more obvious when winning. There is also a draw status when all squares are filled and there is no winner.

Features:

-   state management
-   conditional rendering/styling for winner
-   status update on state of game
-   prevents clicking in square if there's a winner
-   toggles player symbol with boolean
-   checks for draw

### Weather App

<img src='./readme-images/weather-app.png' alt='weather app' />

This one was another idea from Google. It was a bit more involved than I had expected. I was completely unaware of how weather data is retrieved and how the location needs to use longitude and latitude. And of course the temperatures were in Kelvin.

I thought it was really amazing when I got the JSON response and examined all of the data in the console. It's awesome how a few lines of code and an API key can get data on anywhere in the world. I chose to only use a couple data points and limit the country to the US as this was a mini project.

Features:

-   data fetching (US only)
-   temperature conversion (Kelvin to Fahrenheit)
-   location conversion to lon/lat
-   conditional rendering of appropriate weather image and data itself

### Memory Card Game

<img src='./readme-images/memory-card-game.png' alt='memory card game' />

Again, inspiration for this came from ForrestKnight. I thought it would be a fun project to do as I enjoy games myself. This one was one of the more difficult projects as there were a lot of factors to consider such as if the cards match, if they don't, keeping the cards face up if they do, including a time out feature, etc.

Features:

-   randomizes/shuffles the cards on mount
-   times out after 1 second if cards don't match
-   conditional rendering of trophy
-   state management
-   conditional styling of cards

### Flashcards

<img src='./readme-images/flashcards.png' alt='memory card game' />

<img src='./readme-images/flashcards-answer.png' alt='memory card game' />

I was trying to think of a last project to include, and just randomly thought of flashcards so I went for it. I used an array of objects to store the cards. The questions and answers are toggled with a boolean. One of the challenges was cycling through ten elements/cards and not ever 'ending' the set. I had to rely on ChatGPT for helping me with the formulas:

```js
return (previous + 1) % flashcards.length;
return (previous - 1 + flashcards.length) % flashcards.length;
```

Features:

-   endless cycling through flashcards
-   state management keeps track of current position
-   conditional rendering of questions and answers based on boolean toggle

# Getting Started

### Prerequisites

To get the project running on your machine, you'll need to have the following installed:

-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/mshortcodes/mini-projects.git
```

2. Change into the project directory:

```
cd mini-projects
```

3. Install dependencies using npm:

```
npm install
```

4. Run the development server:

```
npm run dev
```

# Contact

Michael Short - mshortcodes@gmail.com

Project link: https://miniprojects.vercel.app/
