class Workout {
    constructor(workoutJSON) {
        this.id = workoutJSON.id
        this.name = workoutJSON.name
    }

    renderLi() {
        return `<li>${this.name}</li>`
    }
}