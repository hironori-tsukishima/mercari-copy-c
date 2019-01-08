class ToppagesController < ApplicationController

  def index
    @items = Item.all.order("created_at DESC").limit(4)
  end

  def show
    @item = Item.find(params[:id])
    @images = @item.item_images
    @anotheritems = Item.where(seller: @item.seller).where.not(id: @item)
  end

  def category_index
  end

end
