import { Route } from "../../domain/entities/route.entity";
import { IRouteRepository } from "../../domain/IRouteRepository";
import { CreateRouteOuptut } from "../../shared/utils/types/route.types";

export class CreateRouteUseCase {
    constructor(
        private readonly _routeRepository: IRouteRepository
    ) { }

    async execute(data: Route): Promise<CreateRouteOuptut> {
        const route = new Route(data);
        await this._routeRepository.insert(data);
        return route.toJSON();
    }
    /** 1h50min */
}