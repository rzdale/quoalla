class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :spot_id
      t.string :commenter_name
      t.text :content
      t.timestamps null:false
    end
  end
end
