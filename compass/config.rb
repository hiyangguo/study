require 'compass/import-once/activate'
require 'compass-normalize'
# Require any additional compass plugins here.

#set the Compass compile environment 配置编译环境
#environment = :production or :development

# Set this to the root of your project when deployed:
http_path = "/" #根路径地址
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "js"
font_dir = "fonts"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment: 允许使用相对路径
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment: 显示行注释
#line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
