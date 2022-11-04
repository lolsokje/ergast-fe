export default interface DriverRace {
    id: Number,
    race: string,
    round: Number,
    date: string,
    grid: Number | null,
    position: Number | null,
    points: Number,
    status: string | null,
    team: string,
    url: string | null,
};
