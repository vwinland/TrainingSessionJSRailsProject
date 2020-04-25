class User < ApplicationRecord
    has_mant :workouts
    has_many :exercises, through :workouts
end
