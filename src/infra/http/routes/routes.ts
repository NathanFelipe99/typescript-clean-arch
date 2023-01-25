import express, { Request, Response } from "express";
import { CreateRouteUseCase } from "../../../application/CreateRouteUseCase";
import { ListRoutesUseCase } from "../../../application/ListRoutesUseCase";
import { RouteRepositoryInMemory } from "../../db/RouteRepositoryInMemory";

const router = express.Router();

const routerRepository = new RouteRepositoryInMemory();

router.post("/routes", async (req: Request, res: Response) => {
    try {
        const createRouteUseCase = new CreateRouteUseCase(routerRepository);
        const route = await createRouteUseCase.execute(req.body);

        return res.status(201).json(route);
    } catch (e) {
        return res.status(400).json(e);
    }
});

router.get("/routes/get", async (req: Request, res: Response) => {
    try {
        const listRoutesUseCase = new ListRoutesUseCase(routerRepository);
        const routes = await listRoutesUseCase.execute();

        return res.status(200).json(routes);
    } catch (e) {
        return res.status(400).json(e);
    }
});

export { router };