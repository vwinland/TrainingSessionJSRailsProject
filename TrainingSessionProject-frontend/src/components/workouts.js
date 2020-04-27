class Workouts {
    constructor() {
        this.workouts = []
        this.adapter = new WorkoutsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadWorkouts()
    }

    //dont want to cache the dom every time. invoke workouts constructor that way we dont need to try and always grab dom element each time it renders, it will save it into this property
    initBindingAndEventListeners() {
        this.workoutsContainer = document.getElementById('workouts-container')
        this.workoutForm = document.getElementById('new-workout-form')
        this.workoutForm.addEventListener('submit', this.createWorkout)
    }

    createWorkout(e) {
        e.preventDefault()
        console.log("workout is being created")
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
        workoutsContainer.innerHTML = this.workouts.map(workout => workout.renderLi()).join('')
    }
}