class Spot < ActiveRecord::Base

  def sort_spots(type)
    Spot.where(spot_type: type)
  end

end
