class RenameItemImagesColumnToImage < ActiveRecord::Migration[5.1]
  def change
    rename_column :item_images, :item_images, :item_images
  end
end
