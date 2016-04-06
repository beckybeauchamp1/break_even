class DrinksController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.json { render json: Drink.all}
    end
  end

  def create
    @drink = Drink.new(drink_params)
        if @drink.save
          render json: @day.to_json, status: :created
        else
          render json: @day.errors, status: :unprocessable_entity
        end
  end

  def show
    @drink = Drink.find(params[:id])
    respond_to do |format|
      format.html
      format.json {render json: @drink.to_json, status: :ok}
    end
  end


  def update
    @drink = Drink.find(params[:id])
    if @drink.update(drink_params)
      render json: @drink.to_json, status: :ok
    else
      render json: @drink.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @drink = Drink.find(params[:id])
    @drink.destroy
    render json: {status: "success"}, status: :ok
  end

  private
  def drink_params
    params.require(:drink).permit(:body)
  end

end
