class ChangeDatatypeSizeToItems < ActiveRecord::Migration[5.1]
  def change
    change_column :items, :size, :string
  end
end
