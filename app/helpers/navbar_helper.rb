module NavbarHelper
  def navbar_items
    [
      {
        name: "Adam Zucker",
        path: home_path
      },
      {
      name: "Resume",
      path: resume_path
      },
      {
        name: "Portfolio",
        path: portfolio_path
      },
      {
        name: "Misc",
        path: misc_path
      }
    ]
  end
end
