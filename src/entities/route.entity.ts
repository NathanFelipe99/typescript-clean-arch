import { PositionProps, RouteProps } from "../shared/utils/types/route.types";

export class Route {
    public props: Required<RouteProps>;
    
    constructor(props: RouteProps) {
        this.props = {
            ...props,
            points: props.points || []
        };
    }

    get title() {
        return this.props.title;
    }

    get startPosition() {
        return this.props.startPosition;
    }

    get endPosition() {
        return this.props.endPosition;
    }

    get points() {
        return this.props.points;
    }

    private set title(title: string) {
        this.props.title = title;
    }

    private set startPosition(startPosition: PositionProps) {
        this.props.startPosition = startPosition;
    }

    private set endPosition(endPosition: PositionProps) {
        this.props.endPosition = endPosition;
    }

    private set points(points: Array<PositionProps>) {
        this.props.points = points;
    }

    updateTitle(title: string) {
        this.title = title;
    }

    updatePosition(startPosition: PositionProps, endPosition: PositionProps) {
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }

    updatePoints(points: Array<PositionProps>) {
        this.points = points;
    }

    toJSON() {
        return this.props;
    }
}
