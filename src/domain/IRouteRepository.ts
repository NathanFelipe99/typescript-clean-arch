import { Route } from "./Route";

export interface IRouteRepository {
    insert(props: Route): Promise<void>;
    findAll(): Promise<Route[]>;
}