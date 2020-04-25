# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Exercise.create([
    { name: 'lunges', type: 'legs'},
    { name: 'pushups', type: 'arms'},
    { name: 'squats', type: 'legs'},
    { name: 'dumbell presses', type: 'back'},
    { name: 'dumbell rows', type: 'chest'},
    { name: 'single-leg deadlifts', type: 'back'},
    { name: 'burpees', type: 'full-body'},
    { name: 'side-planks', type: 'core'},
    { name: 'situps', type: 'core'},
    { name: 'glute bridge', type: 'glute'},

])