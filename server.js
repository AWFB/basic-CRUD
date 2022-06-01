const express = require('express');
const app = express()
const PORT = 3000

// Dummy data
const crew ={
    'picard': {
        'name': 'Jean-Luc Picard',
        'rank': 'Captain',
        'birthPlace': 'Earth',
    },
    'riker': {
        'name': 'William T Riker',
        'rank': 'First officer',
        'birthPlace': 'Earth',
    },
    'barclay': {
        'name': 'Reginald Barclay',
        'rank': 'Lieutenant',
        'birthPlace': 'Earth',
    }
    
}

// Listen for get request for root and respond with index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:crew', (req, res) => {
    const crewName = req.params.crew.toLowerCase()
    if(crew[crewName]){
        res.json(crew[crewName])
    }else (
        res.json(crew['Barclay'])
    )
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
