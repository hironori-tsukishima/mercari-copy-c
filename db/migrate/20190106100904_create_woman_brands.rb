class CreateWomanBrands < ActiveRecord::Migration[5.1]
  def change
    create_table :woman_brands do |t|
      t.string :name ,unique: true
      t.timestamps
    end
  end
end
