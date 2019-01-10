class ChangeColumnInItems < ActiveRecord::Migration[5.1]
  def change
    change_column :items, :status, :string
    change_column :items, :shipping_region, :string
  end
end
