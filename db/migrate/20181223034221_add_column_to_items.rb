class AddColumnToItems < ActiveRecord::Migration[5.1]
  def change
    add_reference :items, :small_category, foreign_key:true
  end
end
