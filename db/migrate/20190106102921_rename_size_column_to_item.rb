class RenameSizeColumnToItem < ActiveRecord::Migration[5.1]
  def change
    rename_column :items, :size, :size_id
  end
end
