@authors.each do |author|
  json.set! author.id do
    json.partial! 'user', user: author
  end
end
