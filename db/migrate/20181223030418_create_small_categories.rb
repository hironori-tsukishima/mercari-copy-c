class CreateSmallCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :small_categories do |t|
      t.string  :name
      t.references  :middle_category, foreign_key: true
      t.timestamps
    end
  end
end
