class ExercisesController < ApplicationController
    # def index 
    #     @exercises = Exercise.all
        
    #     render json: @exercises, status: 200 
    # end

    # def show 
    #     @exercise = Exercise.find(params[:id])

    #     render json: @exercise, status: 200
    # end

    # def create #add in validation later
    #     @exercise = Exercise.create(exercise_params) 

    #     render json: @exercise, status: 200
    # end

    # def update #add in validation later
    #     @exercise = Exercise.find(params[:id])
    #     @exercise.update(exercise_params)
    #     render json: @exercise, status:200
    # end

    # def destroy
    #     @exercise = Exercise.find(params[:id])
    #     exercise.delete

    #     render json: {exerciseId: @exercise.id}
    # end



    # #whitelist params
    # private  
    #     def exercise_params
    #         params.require(:exercise).permit(:name, :workout_id)
    #     end
end

