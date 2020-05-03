class AddExerciseColumnToWorkouts < ActiveRecord::Migration[6.0]
  def change
    add_column :workouts, :exercises, :string
  end
end
