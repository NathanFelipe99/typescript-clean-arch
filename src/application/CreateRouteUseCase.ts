import { Route } from "../domain/Route";
import { IRouteRepository } from "../domain/IRouteRepository";
import { CreateRouteOuptut, RouteProps } from "../shared/utils/types/route.types";

export class CreateRouteUseCase {
    constructor(
        private readonly _routeRepository: IRouteRepository
    ) { }

    async execute(data: RouteProps): Promise<CreateRouteOuptut> {
        const route = new Route(data);
        await this._routeRepository.insert(route);
        return route.toJSON();
    }
}