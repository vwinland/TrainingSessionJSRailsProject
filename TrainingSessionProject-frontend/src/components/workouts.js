class Workouts {
    constructor() {
        this.workouts = []
        this.adapter = new WorkoutsAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadWorkouts()
    }

    //makes a call to backend api, then displays workouts
    fetchAndLoadWorkouts() {
        this.adapter.getWorkouts().then(workouts => {
            console.log(workouts)
        })
    }
}