@class_names.each do |class_name|
  json.set! class_name.id do
    # json.partial! "api/class_names/class_name", class_name: class_name
    json.id class_name.id
    json.name class_name.name
  end
end
