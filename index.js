//Importing
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

//Initialize express
const app = express()

morgan('tiny')

//Mongoose Connection
const url = `mongodb+srv://fullstack-2020-phonebook:${password}@cluster0
.j5mne.mongodb.net/phonebook-app?retryWrites=true&w=majority`
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

//Mongoose Schema definition
const personSchema = new mongoose.Schema({
	name: String,
	number: String 
});
const Persona = mongoose.model('Persona', personSchema);

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

//Hardcoded persons - TODO: Delete this after do git push
let persons =  [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '040-123456'
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '39-44-5323523'
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

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
    response.json(persons)
})

//API post configuration
app.post('/api/persons', (request, response) => {
    const randId = Math.floor(Math.random()*1000)
    const person = request.body
    
    if(!person.name || !person.number){
        response.status(400).json({
            error: 'name or number is missing'
        })
    }
    else if(persons.filter(persona => person.name === persona.name).length > 0){
        response.status(400).json({
            error: "name must be unique"
        })
    }
    else{
        person.id = randId
        persons = persons.concat(person)
        
        console.log(person)
        response.json(person)
    }
})

//API configuration for selecting individual person by their ID
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if(person) {
        response.json(person)
    }
    else{
        response.status(404).end()
    }
})

//Backend Info page
app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`<p>Phonebook has info for ${persons.length} people</p>
    <p>${date}</p>`)
})

//API delete person by their ID
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

//Dealing with the CORS problem
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
