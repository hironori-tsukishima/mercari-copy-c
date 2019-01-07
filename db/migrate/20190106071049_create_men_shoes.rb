class CreateMenShoes < ActiveRecord::Migration[5.1]
  def change
    create_table :men_shoes do |t|
      t.string :size
      t.timestamps
    end
  end
end
