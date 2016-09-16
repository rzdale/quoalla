class SpotsController < ApplicationController

  def index
    if request.xhr?
      render :json => Spot.all
    end
  end

end
