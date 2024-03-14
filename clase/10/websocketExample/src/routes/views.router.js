import { Router } from "express";

const router = Router();

const food = [
    {name:"Hamburguesa", price: "100"},
    {name:"Banana", price: "20"},
    {name:"Soda", price: "40"},
    {name:"Ensalada", price: "120"},
    {name:"Pizza", price: "150"}
];

router.get("/", (req, res) => {
    const testUser = {
        name: "Hilda",
        lastName: "Martinez",
        role: "admin"
    }

    res.render(
        "index",
        {
            title: "CoderHouse",
            style: "index.css",
            user: testUser,
            isAdmin: testUser.role === "admin",
            food
        }
    )
});

export default router;