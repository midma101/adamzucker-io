class AddColumnsToPortfolioEntry < ActiveRecord::Migration[6.0]
  def change
    add_column :portfolio_entries, :show_order, :integer
    add_column :portfolio_entries, :animation_name, :string
    add_column :portfolio_entries, :project_url, :string
    add_column :portfolio_entries, :active, :boolean
    rename_column :portfolio_entries, :github_link, :code_url
  end
end
