# Forget-Me-NOTES
Express.js: Note Taking application

## Description

Forget-Me-NOTES is a note taking application used to WRITE, SAVE and DELETE tasks we can't afford to forget- 

* BACK END development courtesy of Express.js will SAVE note, RETRIEVE note, and DELETE selected note data using node uuid from a JSON file. Back end is connect to a 

* FRONT END that utilizes static html, css and javascript files for front end function & styling, and the whole application is DEPLOYED to Heroku.

## Function 
DATABASE function:
* `db.json` file is used to store, retrieve, delete and rewrite notes using the `fs`    module.

HTML routes & their:
* `GET /notes` returns the `notes.html` file.
* `GET *` returns the `index.html` file.

API ROUTES & their function:
* `GET api function:` READS the `db.json` file and returns all saved notes as JSON.
* `POST api function:` RECEIVES new notes to save on the request body and assigns it a unique id (uuid), and adds it to the `db.json` file. Then returns the new note to the client. 
* `DELETE api function by id:` RECEIVES a query parameter that contains the unique id   (uuid) of the note to delete based on User selection. When queried, all notes from the `db.json` file are READ and, the note with the selected `id` property is DELETED, and then REWRITTEN to `db.json` file.

## User Story
```
AS A mainstream adult,
I WANT to make a to do list with bold titles, followed by details of the task,
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
Open the Note Taker
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


## Mock-Up

The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/11-express-homework-demo-02.png)


## Getting Started






