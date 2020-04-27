class Workouts {
    constructor() {
        this.workouts = []
        this.adapter = new WorkoutsAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadWorkouts()
    }

    //makes a call to backend api, then displays workouts
    fetchAndLoadWorkouts() {
        this.adapter
            .getWorkouts()
            .then(workouts => {
                workouts.forEach(workout => this.workouts.push(new Workout(workout)))
                console.log(this.workouts)
            })
            .then(() => {
                this.render()
            })
    }
    render() {
        const workoutsContainer = document.getElementById('workouts-container')
        workoutsContainer.innerHTML = this.workouts.map(workout => `<li>${workout.name}</li>`).join('')
    }
}