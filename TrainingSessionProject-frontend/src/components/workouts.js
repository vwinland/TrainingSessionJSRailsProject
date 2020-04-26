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
                return console.log(workouts)
            })
            .then(() => {
                this.render()
            })
    }
    render() {
        console.log('rendering...')
    }
}