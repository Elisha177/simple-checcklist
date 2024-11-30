const express = require('express');
const { fetchData } = require('../services/apiService');
const { evaluateChecklist } = require('../controllers/checklistController');
const router = express.Router();

router.get('/evaluate', async (req, res) => {
  try {
    const data = await fetchData();
    const results = evaluateChecklist(data);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
