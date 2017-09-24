class Api::CardsController < ApplicationController
  def index
    @cards = Card.where(list_id: params[:list_id])
    render :index
  end

  def create
    @card = Card.new(card_params)
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 400
    end
  end

  def show
    @card = Card.find_by_id(params[:id])
    if @card
      render :show
    else
      render json: ["Card does not exist"], status: 404
    end
  end

  def update
    @card = Card.find_by_id(params[:id])
    render json: ["Card does not exist"], status: 404 and return unless @card
    @card.update_attributes(card_params)
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 400
    end
  end

  def destroy
    @card = Card.find_by_id(params[:id])
    render json: ["Card does not exist"], status: 404 and return unless @card
    @card = @card.destroy
    render :show
  end

  private

  def card_params
    params.require(:card).permit(:title, :description, :due_date, :list_id)
  end
end
