require 'google/cloud/storage'

credentials = Rails.env.development? ?
                Rails.root.join("config/secrets/adamzucker-io.json") :
                ENV['GOOGLE_APPLICATION_CREDENTIALS']

SitemapGenerator::Sitemap.default_host = "https://www.adamzucker.io/"
SitemapGenerator::Sitemap.sitemaps_host = SitemapGenerator::Sitemap.default_host + "sitemaps/"
SitemapGenerator::Sitemap.adapter = SitemapGenerator::GoogleStorageAdapter.new(
  credentials: credentials.as_json,
  project_id: '805077570181',
  bucket: 'adamzucker-io'
)
SitemapGenerator::Sitemap.create do
  add resume_path
  add portfolio_path
end
