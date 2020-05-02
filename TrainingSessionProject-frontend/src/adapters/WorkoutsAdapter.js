class WorkoutsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/workouts";
  }

  getWorkouts() {
    return fetch(this.baseUrl).then((res) => res.json());
  }

  createWorkout(value) {
    const workout = {
      name: value,
    };

    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      name: JSON.stringify({ workout }),
    }).then((res) => res.json());
  }

  updateWorkout(value, id) {
    const workout = {
      name: value,
    };

    return fetch(`${thzxsder54ris.baseUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      name: JSON.stringify({ workout }),
    }).then((res) => res.json());
  }
}
