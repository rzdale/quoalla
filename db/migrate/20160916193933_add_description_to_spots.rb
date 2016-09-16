class AddDescriptionToSpots < ActiveRecord::Migration[5.0]
  def change
    add_column :spots, :description, :string
  end
end
