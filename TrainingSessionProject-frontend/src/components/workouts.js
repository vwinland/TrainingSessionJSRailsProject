class Workouts {
    constructor() {
        this.workouts = []
        this.adapter = new WorkoutsAdapter()
        this.bindEventListeners()
        this.fetchAndLoadWorkouts()
    }

    fetchAndLoadWorkouts() {
        this.adapter.getWorkouts().then(workouts => {
            console.log(workouts)
        })
    }
}