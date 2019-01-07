class ItemsController < ApplicationController

  def new
    @item = Item.new
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

  def create
    @item = Item.new(create_params)
    if @item.save
      redirect_to root_path, notice:"商品を出品しました"
    else
      render :purchase, alert:"商品が出品できませんでした。"
    end
  end

  def purchase
    render :layout => 'simpleLayout'
  end

  def search
    @items = Item.where('name LIKE(?) OR price LIKE(?) OR explaination LIKE(?)', "%#{params[:keyword]}%", "%#{params[:keyword]}%", "%#{params[:keyword]}%").limit(20)
    @q = Item.ransack(params[:q])
    @itemSearch = @q.result.page(params[:page])
    @largeCategory_id = LargeCategory.where(params[:id])
    @middleCategory_id = MiddleCategory.where(params[:id])
    @smallCategory_id = SmallCategory.where(params[:id])
    gon.largeCategory_id = LargeCategory.where(params[:id])
    gon.middleCategory_id = MiddleCategory.where(params[:id])
    gon.smallCategory_id = SmallCategory.where(params[:id])
    # gon.suitSize = suit.all
    if params[:sort] == 'priceDown'
      @items = @itemSearch.order(price: "ASC")
    elsif params[:sort] == 'priceUp'
      @items = @itemSearch.order(price: "DESC")
    elsif params[:sort] == 'old'
      @items = @itemSearch.order(created_at: "ASC")
    elsif params[:sort] == 'new'
      @items = @itemSearch.order(created_at: "DESC")
    end

  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to root_path
  end

  private
  def create_params
    params.require(:item).permit(:name, :explaination, :price, :status, :shipping_fare, :shipping_region, :shipping_schedule, :shipping_method, :size, :small_category_id, item_images_attributes: [:item_images]).merge(seller_id: current_user.id, buyer_id: 1)
  end
end
