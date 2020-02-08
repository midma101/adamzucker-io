class PagesController < ApplicationController
  def resume
  end

  def portfolio
    @entries = PortfolioEntry.where(active: true).order(:show_order)

    render "pages/portfolio/show"
  end

  def misc
  end
end