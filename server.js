// server.js

// 1 - Bring in Express
const express = require("express");

// 2 - Create an Express app
const app = express();

// 3 - Middleware so we can parse JSON bodies if needed
app.use(express.json());

// 4 - Serve static files from the "public" folder
app.use(express.static("public"));

// 5 - Simple "hello" API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from your Express server! 🎉" });
});

// 6 - A basic data route that returns an array
app.get("/api/items", (req, res) => {
  const items = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" }
  ];
  res.json(items);
});

// Route with a query string
    app.get("/api/items/search", (req, res) => {
      const searchName = req.query.name;
    
      const items = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Mouse" },
        { id: 3, name: "Keyboard" }
      ];
    
      const results = items.filter(i =>
        i.name.toLowerCase().includes(searchName.toLowerCase())
      );
    
      res.json(results);
    });

// Route with a URL parameter
app.get("/api/items/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const items = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" }
    ];

    const item = items.find(i => i.id === id);

    res.json(item);
});
    
// 7 - Start the server on port 3000
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});