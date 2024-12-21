import { Request, Response } from "express";
import pricesController from "./prices.controller";

describe("Prices controller", () => {
    it("should be return prices", async () => {
        const req = {} as Request;

        const res = {
            json: jest.fn(),
        } as unknown as Response;

        pricesController.getAllPrices(req, res);

        expect(res.json).toHaveBeenCalledWith([
            {
                name: "BTC",
                price: 100_000,
            },
            {
                name: "ETH",
                price: 3_000
            },
        ]);
    });
});
