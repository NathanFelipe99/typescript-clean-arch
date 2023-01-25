import { Route } from "../domain/Route";
import { IRouteRepository } from "./../domain/IRouteRepository";

export class RouteRepositoryInMemory implements IRouteRepository {
    routes: Route[] = [];
    
    async insert(props: Route): Promise<void> {
        this.routes.push(props);
    }
    
}