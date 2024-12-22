import app from "./app.express";

console.log("Starting server...");

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
