import { Response, Request } from "express";

function getAllPrices(req: Request, res: Response) {
    res.json([
        {
            name: "BTC",
            price: 100_000,
        },
        {
            name: "ETH",
            price: 3_000,
        },
    ]);
}

export default {
    getAllPrices,
};
