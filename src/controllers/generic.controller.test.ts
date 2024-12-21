import { Request, Response } from "express";
import genericController from "./generic.controller";

describe("Generic controller", () => {
    it("should be return health check status", async () => {
        const req = {} as Request;

        const res = {
            json: jest.fn(),
        } as unknown as Response;

        genericController.healthCheck(req, res);

        expect(res.json).toHaveBeenCalledWith({
            status: "ok",
            message: "Health check passed",
        });
    });
});
