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
        @workout = Workout.create(workout_params) 

        render json: @workout, status: 200
    end

    def update #add in validation later
        @workout = Workout.find(params[:id])
        @workout.update(workout_params)
        render json: @workout, status:200
    end

    def destroy
        @workout = Workout.find(params[:id])
        workout.delete

        render json: {workoutId: @workout.id}
    end



    #whitelist params
    private  
        def exercise_params
            params.require(:exercise).permit(:name, :type)
        end
end

