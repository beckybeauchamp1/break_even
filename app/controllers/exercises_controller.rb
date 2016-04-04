class ExercisesController < ApplicationController

  def index
    @day = Day.find(params[:name])
    @exercises = @day.exercises.all
  end
  def show
    @day = Day.find(params[:name])
    @exercises = @day.exercises.find(params[:id])
  end
  def new
    @day = Day.find(params[:name])
    @exercise = @day.exercises.new
  end
  def create
    @day = Day.find(params[:name])
    @exercise = @day.exercises.create(exercise_params)

    redirect_to day_exercies_path(@day, @exercises)
  end
  def edit
    @day = Day.find(params[:name])
    @exercise = @day.exercises.find(params[:id])
  end
  def update
    @day = Day.find(params[:name])
    @exercise = @day.exercises.find(params[:id])
    @exercise.update(exercise_params)

    redirect_to day_exercises_path
  end
  def destroy
  @day = Day.find(params[:name])
  @exercise = Exercise.find(params[:id])
  @exercise.destroy

  redirect_to day_exercises_path
end
  private
  def exercise_params
    params.require(:exercise).permit(:name, :quanity, :calorie)
  end
end
