# Description

This product showcases the employees retrived from the https://api.1337co.de/v3/employees api.
It shows a simple list of employees with picture, name and office. Aswell as buttons that will take you to that employees socials.
There is also a rudimentary filtering/sorting functionality.
The product has been tested in Chrome, firefox and edge.
I used yarn for this project so you might have to install that, this can be done through npm.

# Thoughts behind the design of the code

I've kept the code clean and elegant, easy to understand for other developers and easy to get into.
I've seperated out code chunks into their own helper functions to make the code more readable.
I've made sure my code follows the DRY principle, for instance by rendering JSX elements through an array.map function.

# Motivation and reasoning of installed packages

The packages used in this project are ones that i am familiar with and understand how to use,
This helps speed up the development.

# A list of the stories i selected and why i chose the features that i did

## Modern CSS

I decided to use styled-components for some modern CSS, i feel this makes development much smoother, and reading of the code easier.

## Sort by name and office

Sorting by name and office seems like a shoe-in feature for this project.

## Filter by name and office

As before, filtering by name and office seems like a pretty standard feature.

## Use Typescript

I really like using typescript, and it feels like a natural progression over just standard JS, especially for larger projects.

## End-to-end testing

I wanted to show some simple e2e testing using cypress.
Testing is a neccessary evil, done right it can save developers for headahces in the future.

# Instructions on how to install and run the application

Clone repo from git
run 'yarn install'
add a '.env' file to project root. add the line 'VITE_API_KEY={api_key}' where api_key is the api key i got from Sandra
but i wont include it here for security reasons.
run 'yarn dev' to start the server

The server should now be running and you can use it.

To run tests:
run 'yarn cypress:run' to run the tests in the CLI.

If you want to see the tests run with cypress's own test application
run 'yarn cypress:open'
click the "E2E Testing" box
click "start E2E testing in..."
in the new window that opens, click "main.cy.ts"
The test runs and you can look through each step of the test in the sidebar.
NOTE: the test runs very fast, and it might take a few seconds for the picture to update in this view.
