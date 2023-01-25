export type PositionProps = {
    lat: number;
    lng: number;
}

export type RouteProps = {
    title: string,
    startPosition: PositionProps,
    endPosition: PositionProps,
    points?: PositionProps[]
}

export type CreateRouteOuptut = {
    id?: string;
    title: string,
    startPosition: PositionProps,
    endPosition: PositionProps,
    points?: PositionProps[]
}