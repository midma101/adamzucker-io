module NavbarHelper
  def navbar_items
    [
      {
        active: request.path.in?([home_path, resume_path]),
        name: "Info",
        path: resume_path
      },
      {
        active: request.path == portfolio_path,
        name: "Portfolio",
        path: portfolio_path
      }
    ]
  end

  def navbar_icons
    [
      {
        key: "github",
        path: "https://github.com/midma101"
      },
      {
        key: "linkedin",
        path: "https://www.linkedin.com/in/adam-zucker-07a77165/"
      },
      {
        key: "email",
        path: "mailto:adman634@gmail.com?subject=re:adamzucker.io"
      }
    ]
  end
end
