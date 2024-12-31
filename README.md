# luke-use-the-force-ex
Little exercise about API and Problem Solving using Star Wars's world.

Problem 1: Use the force luke (only vanilla JS, no framework!!!)

SWAPI is an online API that allows us to obtain information
about the Star Wars universe

Step 1:
Create a button that when pressed retrieves data from https://swapi.dev/api/people
and prints in HTML the names contained in the list

Step 2:
Add 2 buttons, "next" and "back", that when pressed allow us to
fetch the previous or next pages and print the results in html

ex.
https://swapi.dev/api/people?page=1
https://swapi.dev/api/people?page=2
https://swapi.dev/api/people?page=3

Step 3:
Each character fetched with the api https://swapi.dev/api/people
has an associated planet of origin

ex.
{
...
"homeworld": "https://swapi.dev/api/planets/1/"
}

For each character printed on the page, we want next to
the name of the home planet




> `credits: https://codesandbox.io/s/js-web-domain-challenges-cloxjh?file=%2Findex.html`
