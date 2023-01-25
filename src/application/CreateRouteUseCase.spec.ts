import { RouteRepositoryInMemory } from "../infra/RouteRepositoryInMemory";
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

        expect(newRoute).toStrictEqual({
            title: "UseCase test",
            startPosition: { lat: 30, lng: 20 },
            endPosition: { lat: 60, lng: 85 },
            points: []
        });

        expect(routeRepository.routes).toHaveLength(1);
    });
});