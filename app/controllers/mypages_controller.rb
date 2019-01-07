class MypagesController < ApplicationController

  def deliver_address
  end

  def identification
  end

  def email_password
  end


  def notification
  end

  def support
  end

  def point
  end

  def sales
  end

  def main
  end

  def logout
  end

  def card
  end

  def info
  end

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

  def exhibitionItemTransaction
  end

  def exhibitionItemSold
  end

end
