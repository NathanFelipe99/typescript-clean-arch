import { Route } from "../../entities/route.entity";
import { RouteProps } from "../../shared/utils/types/route.types";
import { IRouteRepository } from "./IRouteRepository";

export class RouteRepositoryInMemory implements IRouteRepository {
    routes: Route[] = [];
    
    async insert(props: Route): Promise<void> {
        this.routes.push(props);
    }
    
}