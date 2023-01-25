import { Route } from "../../../domain/entities/route.entity";
import { IRouteRepository } from "../../../domain/IRouteRepository";

export class RouteRepositoryInMemory implements IRouteRepository {
    routes: Route[] = [];
    
    async insert(props: Route): Promise<void> {
        this.routes.push(props);
    }
    
}