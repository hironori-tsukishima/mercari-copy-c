require 'rails_helper'

  describe User do
    describe 'new&create' do
      it "is valid without a name" do
        user = User.new(name: "", explaination: "", price: "", status: "", shipping_fare: "", shipping_region: "", shipping_shcedule: "", shipping_method: "", size: "")
         user.valid?
         expect(item.errors[:small_category_id]).to include("can't be blank")
      end
    end
end
