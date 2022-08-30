import { IBadge } from "./Badge";

export interface ExerciseSet {
    numberOfExercises: number,
    reps: number,
    sets: number,
    time: number,
    badges: Array<IBadge>,
    title: string,
}