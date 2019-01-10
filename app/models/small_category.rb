class SmallCategory < ApplicationRecord
  has_many :items
  has_many :sizes
  belongs_to :middle_category
end
