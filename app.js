const express = require('express')
const path = require('path')
const app = express()

app.use(require('connect-history-api-fallback')())//解决h5路由无法识别的问题

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(80, () => {
	console.log('app listening on port 80.')
})
