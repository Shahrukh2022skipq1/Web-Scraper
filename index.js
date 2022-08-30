const PORT = 8000
const axios = require("axios")
const cheerio = require("cheerio")
const { response } = require("express")
const express = require("express")

const app = express()
//url jis say data lena hai
const url = 'https://www.theguardian.com/international'

axios(url).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    //class jis ka deta lena hai
    $('.fc-slice__item', html).each(function () {
        //jo jo lena hai
        const title = $(this).text()
        const url = $(this).find("a").attr('href')
        articles.push({
            title, url
        })
    })
    console.log(articles)
}).catch(err => console.log(error))


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))