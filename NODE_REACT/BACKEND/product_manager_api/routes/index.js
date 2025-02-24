var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '!vu15499',
  port: 5432,
})

/* GET home page. */
router.get('/', function (req, res, next) {

  /* pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  }) 
  res.render('index', { title: 'Express' });
  */
});
/* api get data from postgresql*/
router.get('/getdata01', function (req, res, next) {
  // Website you wish to allow to connect

  // stackover
  /*  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
 
   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);
 
   // console.log('Day la api lay dl'); */



  //get data 


  pool.query('SELECT * FROM  product_info', (error, response) => {
    if (error) {
      console.log(error);
    } else {
      // console.log(response.rows);
      res.send(response.rows);
    }
    // pool.end();

  })

  // res.render('index', { title: 'Express' });
});

router.get('/add', function (req, res, next) {
  res.render('add', {});
});


router.post('/add', function (req, res, next) {

  var product_name = req.body.product_name,
    product_price = req.body.product_price,
    image = req.body.image;



  pool.query(

    `
    insert into product_info(product_name,product_price,image) values
    ($1,$2,$3)
    `, [product_name, product_price, image], (error, response) => {
    if (error) {
      res.send(error);
      res.send(0);
    } else {
      res.send(1);
    }
  }

  )


  /* 
pool.query("INSERT INTO product_info (product_name,product_price,image) values ($1,$2,$3)", [product_name, product_price, image], (err, response) => {
  if (err) {
    res.send(err);
    res.send(0);
  }
  else {
    res.send(1);
  }
})
*/
  //pool.end();

});

module.exports = router;
