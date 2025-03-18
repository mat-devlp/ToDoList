//// IMPORTS
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

//// DATABASE
const db = new pg.Client({ 
  user: "postgres",
  host: "localhost",
  database: "DATABASE",
  password: "PASSWORD",
  port: 5433,
});

//// CONFIGS
const app = express();
const port = 3000;
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//// VARIABLES
let items = [];

//// ROUTES
app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * from items");
    items = [];
    result.rows.forEach((item) => {
      items.push({ id: item.id, title: item.title });
    });
    console.log(items);
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error loading items.");
  }
});


app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    const result = await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
    items.push({ title: item });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding item.");
  }
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  try {
    const result = await db.query("UPDATE items SET title = ($1) WHERE id = $2", [item, id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating item.");
  }
});


app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});


//// END CODE
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
