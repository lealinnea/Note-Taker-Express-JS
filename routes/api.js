const app = require('express').Router();
const fs = require('fs');
const { stringify } = require('querystring');
const {v4: uuidv4} = require('uuid');

// getting the notes from the db.json
app.get('/', (req,res)=>{
    res.json(JSON.parse(fs.readFileSync('./db/db.json','utf-8')))
})

//posting to db.json 
app.post("/",(req,res) => {

    // assign req.body to needed components of the note
    const { title, text } = req.body;

    // if the note is valid - has title and text - then exicute
    if(title && text){
        // these are our paramiters for our new notes
        const note = {
            title,
            text,
            id:uuidv4()
        }
    // read file
    fs.readFile('./db/db.json', 'utf-8',(err, jsonNotes)=>{
        if (err){
            console.log('error at read file', err)
        }
        // else continue w/ program

        // parse note
        let parseNote = JSON.parse(jsonNotes)
        // push new note entry
        parseNote.push(note)


        // write file
// stringifying parsed note to write db.json
        fs.writeFile('./db/db.json', JSON.stringify(parseNote),(err)=>{
            if (err){
                console.log('error at write file', err)
            }
            else {
                console.log('note successful')
            }
            res.json(parseNote)
        })

    })



    }

    

})

module.exports = app;