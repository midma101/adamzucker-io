require "rails_helper"

RSpec.describe "pages/portfolio/show", type: :view do
  context "#show" do
    context "gif_entry" do
      let(:gif_entry) { create(:portfolio_entry, :gif_entry, show_order: 1) }

      it "shows the right template" do
        render "pages/portfolio/show"
        response.should render_template(:partial => 'pages/portfolio/entries/gif')
      end
    end

    context "animation_entry" do
      let(:animation_entry) { create(:portfolio_entry, :animation_entry, show_order: 2) }

      it "shows the right template" do

      end
    end
  end
end
