class DropTables < ActiveRecord::Migration[5.1]
  def change
    drop_table :suits
    drop_table :men_shoes
    drop_table :lady_shoes
  end
end
