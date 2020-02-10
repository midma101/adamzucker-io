FactoryBot.define do
  factory :portfolio_entry do
    name { "Cool Story" }
    code_url { "www.yup.com" }
    show_order { (Random.rand * 20).ceil }
    active { true }


    factory :gif_entry do
      example_type { "animation" }
      after(:build) do |entry|
        entry.
          example_image.
          attach(
            io: File.open(
              Rails.root.join('spec', 'factories', 'images', 'shorty_ex.gif.jpeg')
            ),
            filename: 'ex.gif', content_type: 'image/gif'
          )
      end
    end

    factory :animation_entry do
      example_type { "animation" }
    end
  end
end
