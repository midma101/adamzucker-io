module NavbarModule
  def navbar_items
    [
      {
        name: "Misc",
        path: misc_path
      },
      {
        name: "Portfolio",
        path: portfolio_path
      },
      {
        name: "Resume",
        path: resume_path
      }
    ]
  end
end
