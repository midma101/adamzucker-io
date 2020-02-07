class PortfolioEntry < ApplicationRecord
  has_one_attached :example_image
  enum example_type: { gif: 0, animation: 1 }
end
