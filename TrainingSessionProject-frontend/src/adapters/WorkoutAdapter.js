class Workouts {
    constructor{
    this.baseURL = 'http://localhost:3000api/v1.workouts'
}

getWorkouts() {
    return fetch(this.baseURL).then(res => res.json()
    )
}
}

