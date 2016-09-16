class CreateSpots < ActiveRecord::Migration[5.0]
  def change
    create_table :spots do |t|
      t.string :name
      t.string :spot_type
      t.integer :upvotes
      t.float :latitude
      t.float :longitude
      t.timestamps null: false
    end
  end
end


