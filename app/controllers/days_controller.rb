class DaysController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { render json: Day.all}
    end
  end
  #
  # def new
  #   @day = Day.new
  #   render json: @day.to_json, status: :ok
  # end

  def create
    @day = Day.new(day_params)
        if @day.save
          render json: @day.to_json, status: :created
        else
          render json: @day.errors, status: :unprocessable_entity
        end
  end

  def show
    @day = Day.find(params[:id])
    respond_to do |format|
      format.html
      format.json {render json: @day.to_json, status: :ok}
    end
  end


  def update
    @day = Day.find(params[:id])
    if @day.update(day_params)
      render json: @day.to_json, status: :ok
    else
      render json: @day.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @day = Day.find(params[:id])
    @day.destroy
    render json: {status: "success"}, status: :ok
  end

  private
  def day_params
    params.require(:day).permit(:dayname)
  end

end
