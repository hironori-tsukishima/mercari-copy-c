class MiddleCategory < ApplicationRecord
  has_many :small_categories
  belongs_to :large_category
end
