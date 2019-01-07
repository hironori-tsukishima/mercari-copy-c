class CreateLadyShoes < ActiveRecord::Migration[5.1]
  def change
    create_table :lady_shoes do |t|
      t.string :size
      t.timestamps
    end
  end
end
