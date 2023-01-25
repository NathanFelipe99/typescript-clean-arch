import { Route } from "../entities/route.entity";
import { IRouteRepository } from "../repositotries/in-memory/IRouteRepository";
import { CreateRouteOuptut } from "../shared/utils/types/route.types";

export class CreateRouteUseCase {
    constructor(
        private readonly _routeRepository: IRouteRepository
    ) { }

    async execute(data: Route): Promise<CreateRouteOuptut> {
        const route = new Route(data);
        await this._routeRepository.insert(data);
        return route.toJSON();
    }
}