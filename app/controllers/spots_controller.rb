class SpotsController < ApplicationController

  def index
    if request.xhr?
      render :json => Spot.all
    end
  end

  def create
    @spot = Spot.new(spots_params)
    if @spot.save
      puts "It was saved!1!!"
    else
      puts "not saved"
    end
  end

  private
  def spots_params
    params.require(:spot).permit(:name, :spot_type, :description, :latitude, :longitude, :upvotes)
  end

end
