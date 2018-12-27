class CreateMiddleCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :middle_categories do |t|
      t.string  :name
      t.references  :large_category, foreign_key: true
      t.timestamps
    end
  end
end
