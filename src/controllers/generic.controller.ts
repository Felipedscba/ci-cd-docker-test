import { Request, Response } from "express";

function healthCheck(req: Request, res: Response) {
    res.json({
        status: "ok",
        message: "Health check passed",
    });
}

export default {
    healthCheck,
};
