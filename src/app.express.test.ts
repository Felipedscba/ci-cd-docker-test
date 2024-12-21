import request from "supertest";
import app from "./app.express";

describe("Server", () => {
    it("GET /", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            status: "ok",
            message: "Health check passed",
        });
    });
    it("GET /prices", async () => {
        const response = await request(app).get("/prices");
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            {
                name: "BTC",
                price: 100_000,
            },
            {
                name: "ETH",
                price: 3_000,
            },
        ]);
    });
});
