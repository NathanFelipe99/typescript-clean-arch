import { Route } from "../domain/Route";
import { RouteProps } from "../shared/utils/types/route.types";
import { RouteRepositoryInMemory } from "./RouteRepositoryInMemory";

describe("RouteInMemoryRepository tests", () => {
    it("should be able to insert a new route", async () => {
        const repository = new RouteRepositoryInMemory();
        let routeProps: RouteProps = {
            title: "rotinha2",
            startPosition: { lat: 5, lng: 8 },
            endPosition: { lat: 14, lng: 12 }
        };

        const route = new Route(routeProps);
        await repository.insert(route);

        expect(repository.routes).toHaveLength(1);
        expect(repository.routes).toStrictEqual([route]);
    });
});