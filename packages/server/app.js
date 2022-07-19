import dotenv from 'dotenv'
import express from 'express'
var app = express()
dotenv.config()

//setup middleware for JSON
app.use(express.json())

// Listen at root endpoint
app.get('/', (req, res) => {
    // Return json 
    res.send({"myMessage": test})
})

app.get("/v1/stats/:userSentIdentification", (req, res) => {
    res.send({ 
        "uuid": req.params.userSentIdentification,
        "name": {
            "first": "Donald",
            "Last": "Trump"
        },
        "currentGpa": 4.0,
        "predictedGpa": 4.0,
        "gpaGoal": 3.6,
        "classes": [
            {
                "name": "History of Civ",
                "grade": 100,
                "creditHours": 4,
                "assignmentTypes": [
                    {
                        "name": "Quizes",
                        "weight": 0.20,
                         "id": 1
                    },
                    {
                        "name": "Test and Exams",
                        "weight": 0.30,
                        "id": 2
                    },
                    {
                        "name": "Final Exam",
                        "weight": 50,
                        "id": 3
                    }
                ],
                "asignments": [
                    {
                        "name": "Syllabus Review",
                        "grade": 100,
                        "id": 2
                    },
                    {
                        "name": "Homework1",
                        "grade": 100
                    }
                ],
            }
        ]
    })
})

app.listen(process.env.PORT || 8080, () => {
    console.log("education-path-server:\nStatus: Runnning")
})