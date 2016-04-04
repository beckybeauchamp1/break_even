class ExercisesController < ApplicationController
  def index
    @day = Day.find(params[:day_id])
    @exercises = @day.exercises.all
  end
  def show
    @day = Day.find(params[:day_id])
    @exercises = @day.exercises.find(params[:id])
  end
  def new
    @day = Day.find(params[:day_id])
    @exercise = @day.exercises.new
  end
  def create
    @day = Day.find(params[:day_id])
    @exercise = @day.exercises.create(exercise_params)

    redirect_to day_exercies_path(@day, @exercises)
  end
  def edit
    @day = Day.find(params[:day_id])
    @exercise = @day.exercises.find(params[:id])
  end
  def update
    @day = Day.find(params[:runner_id])
    @exercise = @day.exercises.find(params[:id])
    @exercise.update(exercise_params)

    redirect_to day_exercises_path
  end
  def destroy
  @day = Day.find(params[:day_id])
  @exercise = Exercise.find(params[:id])
  @exercise.destroy

  redirect_to day_exercises_path
end
  private
  def exercise_params
    params.require(:exercise).permit()
  end
end
