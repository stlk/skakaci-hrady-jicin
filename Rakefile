require "rubygems"
require "tmpdir"

GITHUB_REPONAME = "stlk/skakaci-hrady-jicin"

namespace :site do

  desc "Generate and publish"
  task :publish do
    system "bundle exec middleman build"
    Dir.mktmpdir do |tmp|
      cp_r "build/.", tmp

      Dir.chdir tmp
      system "git init"
      system "git add ."
      message = "Site updated at #{Time.now.utc}"
      system "git commit -m #{message.inspect}"
      system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
      system "git push origin master:refs/heads/gh-pages --force"
    end
  end
end
