class AddbrandToItem < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :brand, :string
  end
end
