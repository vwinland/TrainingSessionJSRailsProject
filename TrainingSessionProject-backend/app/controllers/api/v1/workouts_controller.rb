class Api::V1::WorkoutsController < ApplicationController
    def index 
        @workouts = Workout.all
        
        render json: @workouts, status: 200 
    end

    def show 
        @workout= Workout.find(params[:id])

        render json: @workout, status: 200
    end

    def create #add in validation later
        @workout = Workout.create

        render json: @workout, status: 200
    end

    def update #add in validation later
        @workout = Workout.find(params[:id])
    end

    def destroy
        @workout = Workout.find(params[:id])
        workout.delete

        render json: {workoutId: @workout.id}
    end



    #whitelist params
    #private  
     #   def workout_params
      #      params.require(:workout.permit(:name))
       # end
end

