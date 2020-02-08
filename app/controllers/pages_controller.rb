class PagesController < ApplicationController
  def resume
  end

  def portfolio
    @entries = PortfolioEntry.
      joins(:example_image_attachment).
      group(:id).
      having("COUNT(active_storage_attachments) > 0")

    render "pages/portfolio/show"
  end

  def misc
  end
end