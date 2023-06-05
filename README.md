# Forget-Me-NOTES
Express.js: Note Taking application


## DESCRIPTION

Forget-Me-NOTES is a note taking application used to WRITE, SAVE and DELETE tasks we can't afford to forget- 

* BACK END development courtesy of Express.js will SAVE note, RETRIEVE note, and DELETE
  selected note data using node uuid from a JSON file. Back end is connect to a   

* FRONT END that utilizes static html, css and javascript files for front end function & 
  styling, and the whole application is DEPLOYED to Heroku.


The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/images/Note%20Taker%20(2).png)

![Note titled “Bank Fraud & Tax Evasion” reads, “DEPOSIT: $999,900 off shore, $100 locally, report $10" and save icon appears top right nav bar.](./Assets/images/Note%20Taker%20image%201.png)


## DEPLOYMENT
* HEROKU https://git.heroku.com/forget-me-note-taker.git


## FUNCTION

DATABASE:

* `db.json` file is used to store, retrieve, delete and rewrite notes using the `fs`    
            module.


HTML routes:

* `GET /notes` returns the `notes.html` file.

* `GET *` returns the `index.html` file.


API ROUTES:

* `GET api function:`  READS the `db.json` file and returns all saved notes as JSON.

* `POST api function:` RECEIVES new notes to save on the request body and assigns it a 
                       unique id (uuid), and adds it to the `db.json` file. Then returns the new note to the client.

* `DELETE api by id:`  RECEIVES a query parameter that contains the unique id (uuid) of 
                       the note to delete based on User selection. When queried, all notes
                       from the `db.json` are READ and, the note with the selected `id` 
                       property is DELETED, and then REWRITTEN to `db.json` file.



## USER STORY
```
AS A mainstream adult,
I WANT to make a to do list with bold titles, followed by details of the task,
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## USAGE

* CLICK "get started" (on homepage) to open the Note Taker,

* SAVED notes appear on the left-hand column, 

* NEW NOTE- User is presented with empty fields to enter "NOTE TITLE" & "NOTE TEXT", 

* SAVE NEW NOTE- Click the save icon that appears in navbar when data fields are filled, 

* TRANSITION- new note becomes a saved note, visable in left-hand column,

* DELETE- Click trash can icon next to note to delete note.


## TECHNOLOGIES

Back End:
* Express.js- backend function
* fs- read, write and append
* path- 
* uuid- unique id

Front End:
* HTML- user interface
* css- styling
* Bootstrap- styling
* JavaScript- function

Depolyment
* Heroku


## CREDITS

* Node
* Heroku














