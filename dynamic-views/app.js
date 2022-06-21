const express = require('express')

const app = express()

// setup
app.use(express.static('public'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

// routes
app.get('/', (req, res) => {

    const data = {
        name: 'Víctor',
        lastName: 'Sobrinos',
        bootcamp: 'Web Development',
        campus: 'Madrid',
        address: {
            street: 'Whatyever str',
            number: 35
        },
        age: 33,
        debt: true,
        pending: 2000,
        subjects: ['HTML', 'CSS', 'JS', 'REACT'],
        teacher: undefined,
        prework: false
    }

    res.render('index-page', data)
})

app.listen(5005, () => console.log('SERVER RUNNING ON PORT 5005'))