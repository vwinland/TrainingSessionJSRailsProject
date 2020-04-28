class Workouts {
    constructor() {
        this.workouts = []
        this.adapter = new WorkoutsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadWorkouts()
    }

    initBindingsAndEventListeners() {
        this.workoutsContainer = document.getElementById('workouts-container')
        this.name = document.querySelector('name')
        this.newWorkoutName = document.getElementById('new-workout-name')
        this.workoutForm = document.getElementById('new-workout-form')
        this.workoutForm.addEventListener('submit', this.createWorkout.bind(this))
        this.workoutsContainer.addEventListener('dblclick', this.handleWorkoutClick.bind(this))
    }

    createWorkout(e) {
        e.preventDefault()
        const value = this.newWorkoutName.value

        this.adapter.createWorkout(value).then(workout => {
            this.workouts.push(new Workout(workout))
            this.newWorkoutName.value = ''
            this.render()
        })
    }

    handleWorkoutClick(e) {
        console.log(e.target)
    }

    fetchAndLoadWorkouts() {
        this.adapter
            .getWorkouts()
            .then(workouts => {
                workouts.forEach(workout => this.workouts.push(new Workout(workout)))
            })
            .then(() => {
                this.render()
            })
    }

    render() {
        this.workoutsContainer.innerHTML = this.workouts.map(workout => workout.renderLi()).join('')
    }
}