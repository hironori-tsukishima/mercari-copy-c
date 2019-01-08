class ToppagesController < ApplicationController

  def index
    @items = Item.all.order("created_at DESC").limit(4)
  end

  def show
    @item = Item.find(params[:id])
    @images = @item.item_images
    @anotheritems = Item.where(seller: @item.seller).where.not(id: @item)
  end

  def small_category_show
    @selected_Scate = SmallCategory.find(params[:id])
    @selected_Scate_items = @selected_Scate.items
  end

  def middle_category_show
    @selected_Mcate = MiddleCategory.find(params[:id])
    @related_Scates = @selected_Mcate.small_categories
      @selected_Mcate_items = []
      @related_Scates.each do |related_Scate|
        @selected_Mcate_items << related_Scate.items
      end
      @selected_Mcate_items.flatten!
  end

  def large_category_show
    @selected_Lcate = LargeCategory.find(params[:id])
    @related_Mcates = @selected_Lcate.middle_categories
      @related_Scates = []
      @related_Mcates.each do |related_Mcate|
        @related_Scates << related_Mcate.small_categories
      end
      @related_Scates.flatten!
        @selected_Lcate_items = []
        @related_Scates.each do |related_Scate|
          @selected_Lcate_items << related_Scate.items
        end
        @selected_Lcate_items.flatten!
  end
end
