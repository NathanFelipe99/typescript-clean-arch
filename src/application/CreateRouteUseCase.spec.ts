import { RouteRepositoryInMemory } from "../infra/db/RouteRepositoryInMemory";
import { CreateRouteUseCase } from "./CreateRouteUseCase";

describe("CreateRouteUseCase tests", () => {
    it("should be able to create a new route using the useCase", async () => {
        const routeRepository = new RouteRepositoryInMemory();
        const createRouteUseCase = new CreateRouteUseCase(routeRepository);

        const newRoute = await createRouteUseCase.execute({
            title: "UseCase test",
            startPosition: { lat: 30, lng: 20 },
            endPosition: { lat: 60, lng: 85 }
        });
        
        expect(routeRepository.routes).toHaveLength(1);
        expect(newRoute).toStrictEqual({
            id: routeRepository.routes[0].id,
            title: "UseCase test",
            startPosition: { lat: 30, lng: 20 },
            endPosition: { lat: 60, lng: 85 },
            points: []
        });
    });
});