const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const pool = require('../modules/pool.js');
// const express = require('express');
// const router = express.Router();
// const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  console.log('GET /api/gallery received a request');

  const sqlText = `
    SELECT * FROM "gallery"
      ORDER BY "id";
  `;

  pool.query(sqlText)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('Database error in GET /api/gallery: ', dbErr);
      res.sendStatus(500);
    })

});

module.exports = router;
