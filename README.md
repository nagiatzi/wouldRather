# Would You Rather?

This project has been built as a part of react nanodegree present on Udacity. This project utilises default data provided by Udacity Starter code. This code can be found in `src/utils/_DATA.js` file. All of the API is created with the help of this source file.

# About
The "Would You Rather?" Project, is  a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In the app, users are able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

## App Functionality
The app will load to the home page but will redirect to the login page if an authenticated user is not found. On the login page, there are 3 profiles to choose from. Once logged in, the app will redirect back to the home page where the user can see the questions they have not answered yet and an option to view the questions they have answered. If an unanswered question is clicked, they will be able to view the question and its two possible answers. Once answered, the question is moved to the answered category and they can view their answer as well as a percentage of users votes for each of the two options. There is also two other links on the top navigation, one for the leaderboard and one for posting a new question. The new question link takes the user to a form where they can input the two options for a new question that will be added to the polls. The leaderboard shows all users and their total score, measured by the sum of the number of questions asked and answered.

## Running the application


You must first clone the repository and then run:

    npm install                     # Or yarn install
    npm start                       # Or yarn start


And you will have the application up and running.
