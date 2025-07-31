# frozen_string_literal: true

InertiaRails.configure do |config|
    config.ssr_enabled = ViteRuby.config.ssr_build_enabled
    config.version = ViteRuby.digest
  end

  InertiaRails.configure do |config|
    config.ssr_enabled = true
    config.ssr_url = "http://localhost:13714"
  end 