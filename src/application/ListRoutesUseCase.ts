import { IRouteRepository } from "../domain/IRouteRepository";
import { CreateRouteOuptut } from "../shared/utils/types/route.types";

export class ListRoutesUseCase {
    constructor(
        private readonly _routeRepository: IRouteRepository
    ) { }
    
    async execute(): Promise<CreateRouteOuptut[]> {
        const routes = await this._routeRepository.findAll();
        return routes;
    }
}