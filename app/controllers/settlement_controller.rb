class SettlementController < ApplicationController
  def create
    @item = Item.find(params[:id])
    @images = @item.item_images
    settlement = Item.find(params[:id])
    settlement.with_lock do
      Payjp.api_key = ENV['PAYJP_APP_SECRET']
      Payjp::Charge.create(
        amount: settlement.price,
        card: params['payjp-token'],
        currency: 'jpy'
        )
    end
  end
end
