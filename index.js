//Importing
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Persona = require('./models/person')

//Initialize express
const app = express()

morgan('tiny')

//Morgan Logging composition
const logging = morgan((tokens,req, res) => {
    return [
        tokens.method(req, res),
        tokens.url(req,res),
        tokens.status(req,res),
        tokens.res(req,res,'content-length'), '-',
        tokens['response-time'](req,res),'ms'
    ].join(' ')
})

//App configurations
app.use(express.json())
app.use(logging)
app.use(cors())
app.use(express.static('build'))

//Root backend page configuration
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

//Api person importing hardcoded persons
app.get('/api/persons', (request, response) => {
    Persona.find({}).then(persons => {
        response.json(persons)
    })
})

//API post configuration
app.post('/api/persons', (request, response) => {
    const person = request.body
    const persona = new Persona ({
        name: person.name,
        number: person.number
    })

    if(!person.name || !person.number){
        response.status(400).json({
            error: 'name or number is missing'
        })
    }
    else if(Persona.find({name:persona.name}) === true){
        response.status(400).json({
            error: "name must be unique"
        })
    }
    else{
        console.log('else')
        persona.save().then(savedNote => {
            response.json(savedNote)
        })
    }
})

//API configuration for selecting individual person by their ID
app.get('/api/persons/:id', (request, response) => {
    Persona.findById(request.params.id).then(note=>{
        response.json(note)
    })
    .catch(() => response.status(404).end())
})

//Backend Info page
app.get('/info', (request, response) => {
    const date = new Date()
    Persona.count({}, (err, countResponse) => {
        response.send(`<p>Phonebook has info for ${countResponse} people</p>
        <p>${date}</p>`)
    })
})

//API delete person by their ID
app.delete('/api/persons/:id', (request, response) => {
    //const id = Number(request.params.id)
    //persons = persons.filter(person => person.id !== id)
    Persona.deleteOne({_id: request.params.id}, (err) => {})
})

//Dealing with the CORS problem
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
