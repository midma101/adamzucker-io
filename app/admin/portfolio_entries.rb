ActiveAdmin.register PortfolioEntry do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :github_link, :example_type, :example_image
  #
  # or
  #
  # permit_params do
  #   permitted = [:name, :github_link, :example_type]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  #
  form do |f|
    input :name
    input :github_link
    input :example_type
    input :example_image, as: :file

    actions
  end
end
