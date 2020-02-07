class CreatePortfolioEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :portfolio_entries do |t|
      t.string :name, null: false
      t.string :github_link
      t.column :example_type, :integer, default: 0


      t.timestamps
    end
  end
end
