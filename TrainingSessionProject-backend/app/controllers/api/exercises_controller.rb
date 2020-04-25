class Api::V1::ExercisesController < ApplicationController
    def index 
        @exercies = Exercise.all
        
        render json: @notes, status: 200 
end
