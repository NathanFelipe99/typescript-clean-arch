import { Route } from "./entities/route.entity";

export interface IRouteRepository {
    insert(props: Route): Promise<void>;
}