# server.js (backend skeleton)

const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.use(express.json())

// health
app.get('/health', (req, res) => res.json({status: 'ok'}))

// placeholder routes
app.post('/api/auth/register', (req, res) => {
  // register + save questionnaire -> pending
  res.status(501).json({error: 'Not implemented'})
})

app.post('/api/auth/verify-email', (req, res) => {
  res.status(501).json({error: 'Not implemented'})
})

app.post('/api/admin/review', (req, res) => {
  // admin key required
  res.status(501).json({error: 'Not implemented'})
})

app.listen(port, () => console.log(`Backend listening on ${port}`))
