import { Badge } from "./Badge";

export interface ExerciseSet {
    numberOfExercises: number,
    reps: number,
    sets: number,
    time: number,
    badges: Array<Badge>,
    title: string,
}