class MypagesController < ApplicationController

  def sellingItem
    @item = Item.find(params[:id])
    @images = @item.item_images
  end

  def sellingItemEdit
    @item = Item.find(params[:id])
    4.times { @item.item_images.build }
    @lc = LargeCategory.all
    @mc = MiddleCategory.all
    @sc = SmallCategory.all
    @middle_categories = MiddleCategory.all
    gon.l_cate = LargeCategory.all
    gon.m_cate = MiddleCategory.all
    gon.s_cate = SmallCategory.all
    respond_to do |format|
      format.html
      format.json
    end
  end

  def exhibitionItemSelling
    @items = Item.where(seller_id: current_user.id)
  end

  def users
    @user = User.find(params[:id])
    @items = Item.where(seller_id: @user.id)
  end


end
