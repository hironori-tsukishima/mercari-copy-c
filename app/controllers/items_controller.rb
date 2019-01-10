class ItemsController < ApplicationController

  def new
    @item = Item.new
    @item.item_images.build
    @lc = LargeCategory.all
    @mc = MiddleCategory.all
    @sc = SmallCategory.all
    @middle_categories = MiddleCategory.all
    gon.l_cate = LargeCategory.all
    gon.m_cate = MiddleCategory.all
    gon.s_cate = SmallCategory.all

  end

# SIZEを外部キーにしたため、save時にエラる
  def create
    @item = Item.new(create_params)
    if @item.save!
      redirect_to root_path, notice:"商品を出品しました"
      # render json: {message: 'success', itemId: @item.id}, status: 200
    else
      # render json: { error: @item.errors.full_messages.join(", ")}, status: 400
      render :purchase, alert:"商品が出品できませんでした。"
    end
  end

  def update
    @item = Item.find(params[:id])
    if  @item.seller_id != current_user.id
      flash[:notice] = "権限がありません"
    elsif @item.update(create_params)
      flash[:notice] = "商品を編集しました"
    else
      flash[:notice] = "編集できませんでした"
    end
    redirect_to "/mypages/sellingItem/#{@item.id}"
  end

  def purchase
    render :layout => 'simpleLayout'
    @item = Item.find(params[:id])
    @images = @item.item_images.first
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
    gon.suit = Suit.where(params[:id])
    gon.menShoes = MenShoe.where(params[:id])
    gon.ladyShoes = LadyShoe.where(params[:id])
    # binding.pry
    case params[:sort]
    when 'priceDown' then
      @items = @itemSearch.order(price: "ASC")
    when 'priceUp' then
      @items = @itemSearch.order(price: "DESC")
    when 'old' then
      @items = @itemSearch.order(created_at: "ASC")
    when 'new' then
      @items = @itemSearch.order(created_at: "DESC")
    end

  end

  def destroy
    @item = Item.find(params[:id])
    if @item.seller_id != current_user.id
      flash[:notice] = "権限がありません"
    elsif @item.destroy
      flash[:notice] = "商品を削除しました"
    else
      flash[:notice] = "削除できませんでした"
    end
    redirect_to mypages_exhibitionItemSelling_path
  end

  private
  def create_params
    params.require(:item).permit(:name, :explaination, :price, :status, :shipping_fare, :shipping_region, :shipping_shcedule, :shipping_method, :size, :small_category_id, item_images_attributes: [:item_images, :item_id, :id]).merge(seller_id: current_user.id, buyer_id: 1)
  end
end
