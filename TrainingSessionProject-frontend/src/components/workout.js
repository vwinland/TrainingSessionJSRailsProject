class Workout {
  constructor(workoutJSON) {
    this.id = workoutJSON.id;
    this.name = workoutJSON.name;
    this.exercise = workoutJSON.exercises;
  }

  renderLi() {
    return `<li data-id=${this.id}>${this.name}<form id="new-exercise-form">
    <input type="text" name="exercise-name" id="new-exercise-name">
    <input type="submit" value="Add Exercise" />
</form></li>`;
  }
}
