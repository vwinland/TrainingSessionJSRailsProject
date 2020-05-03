# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#Exercise.destroy_all
#Workout.destroy_all

workout1 = Workout.create(name: "Workout 1")
workout2 = Workout.create(name: "Workout 2")
workout3 = Workout.create(name: "Workout 3")

Exercise.create(name: "squats", workout: workout1)
Exercise.create(name: "pushups", workout: workout2)
Exercise.create(name: "lunges", workout: workout3)
