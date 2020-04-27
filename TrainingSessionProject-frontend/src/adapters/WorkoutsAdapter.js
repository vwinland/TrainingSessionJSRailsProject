class WorkoutsAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000/api/v1/workouts'
    }

    getWorkouts() {
        return fetch(this.baseURL).then(res => res.json())
    }

    createWorkout(value) {
        const workout = {
            name: value
        }
        return fetch(this.baseURL, {
            method: 'POST',
            name: JSON.stringify({ workout })
        })
    }
}

