const express = require('express');
const checklistRoutes = require('./routes/checklistRoutes');
const path = require('path');
const cors = require('cors');
app.use(cors({ origin: 'https://simple-checcklist-d19y8osa6-elisha177s-projects.vercel.app/' }));


const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', checklistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
