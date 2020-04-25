class CreateExercises < ActiveRecord::Migration[6.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :type
      t.string :equipment
      t.integer :sets
      t.integer :reps 
      t.integer :duration
      t.timestamps
    end
  end
end
