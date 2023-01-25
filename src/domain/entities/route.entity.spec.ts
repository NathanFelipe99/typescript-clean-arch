import { Route } from "./route.entity";
import { PositionProps, RouteProps } from "../../shared/utils/types/route.types";

describe("Route tests", () => {
    it("Testing class constructor", () => {
        let routeProps: RouteProps = {
            title: "rotinha",
            startPosition: { lat: 5, lng: 8 },
            endPosition: { lat: 14, lng: 12 }
        };

        const route = new Route(routeProps);
        expect(route.props).toStrictEqual({
            ...routeProps,
            points: []
        });

        routeProps = {
            title: "rotinha",
            startPosition: { lat: 5, lng: 8 },
            endPosition: { lat: 14, lng: 12 },
            points: [{ lat: 8, lng: 10 }]
        };

        const route2 = new Route(routeProps);
        expect(route2.props).toStrictEqual({
            ...routeProps,
            points: [{ lat: 8, lng: 10 }]
        });

    });

    it("should be able to update route title", () => {
        let routeProps: RouteProps = {
            title: "rotinha2",
            startPosition: { lat: 5, lng: 8 },
            endPosition: { lat: 14, lng: 12 }
        };

        const route = new Route(routeProps);
        route.updateTitle("teste update title");
        expect(route.title).toBe("teste update title");
    });

    it("should be able to update positions", () => {
        let routeProps: RouteProps = {
            title: "rotinha3",
            startPosition: { lat: 5, lng: 8 },
            endPosition: { lat: 14, lng: 12 }
        };

        const route = new Route(routeProps);
        const [newStartPosition, newEndPosition] = [{ lat: 40, lng: 50 }, { lat: 60, lng: 100 }];
        
        route.updatePosition(
            newStartPosition,
            newEndPosition
        );
        expect(route.startPosition).toBe(newStartPosition);
        expect(route.endPosition).toBe(newEndPosition);
    });

    it("should be able to alter points", () => {
        let routeProps: RouteProps = {
            title: "rotinha3",
            startPosition: { lat: 5, lng: 8 },
            endPosition: { lat: 14, lng: 12 }
        };

        const route = new Route(routeProps);

        const points: PositionProps[] = [
            { lat: 8, lng: 9 }
        ];
        route.updatePoints(points);

        expect(route.points).toHaveLength(points.length);
        expect(route.points).toStrictEqual(points);
    });
});