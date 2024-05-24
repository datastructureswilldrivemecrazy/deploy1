const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const githubData = {"login":"datastructureswilldrivemecrazy","id":109077896,"node_id":"U_kgDOBoBliA","avatar_url":"https://avatars.githubusercontent.com/u/109077896?v=4","gravatar_id":"","url":"https://api.github.com/users/datastructureswilldrivemecrazy","html_url":"https://github.com/datastructureswilldrivemecrazy","followers_url":"https://api.github.com/users/datastructureswilldrivemecrazy/followers","following_url":"https://api.github.com/users/datastructureswilldrivemecrazy/following{/other_user}","gists_url":"https://api.github.com/users/datastructureswilldrivemecrazy/gists{/gist_id}","starred_url":"https://api.github.com/users/datastructureswilldrivemecrazy/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/datastructureswilldrivemecrazy/subscriptions","organizations_url":"https://api.github.com/users/datastructureswilldrivemecrazy/orgs","repos_url":"https://api.github.com/users/datastructureswilldrivemecrazy/repos","events_url":"https://api.github.com/users/datastructureswilldrivemecrazy/events{/privacy}","received_events_url":"https://api.github.com/users/datastructureswilldrivemecrazy/received_events","type":"User","site_admin":false,"name":"Bishal Sen","company":null,"blog":"","location":"Kolkata","email":null,"hireable":null,"bio":"I am pursuing a bachelor's degree in Computer Science. I am proficient in Java, Python, JS, Node, Express, HTML, CSS and C++. Currently looking for internships.","twitter_username":"BishalS28656009","public_repos":15,"public_gists":0,"followers":1,"following":1,"created_at":"2022-07-11T11:25:15Z","updated_at":"2024-05-23T13:38:03Z"}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=> {
    res.send("Twitter found!")
})

app.get('/login', (req, res) => {
    res.send("Login page here")
})

app.get('/chai', (req, res)=> {
    res.send("<h1>Thanks chai aur backend</h1>")
})

app.get('/github', (req, res) => {
  res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})