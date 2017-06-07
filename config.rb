configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end

activate :directory_indexes

ignore "/templates/*"

require 'sprockets/es6'
activate :sprockets do |s|
  s.supported_output_extensions << ".es6"
end

helpers do
  def marker_image_filenames
    file_extension = ".png"
    Dir[File.join(root, "source/images/markers/*#{file_extension}")].map do |path|
      {
        path: "/images/markers/#{File.basename(path)}",
        name: "#{File.basename(path, file_extension)}"
      }
    end
  end
end
