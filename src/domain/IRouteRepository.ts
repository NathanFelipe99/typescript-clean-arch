import { RouteProps } from "../shared/utils/types/route.types";

export interface IRouteRepository {
    insert(props: RouteProps): Promise<void>;
}