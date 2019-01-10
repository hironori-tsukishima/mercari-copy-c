class ChangeColumnToItems < ActiveRecord::Migration[5.1]
  def change
    rename_column :items, :size_id, :size
  end
end
