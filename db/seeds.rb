# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.create(name: 'Yayoi Kusama',
                    email: 'y.kusama@art.jp',
                    password: 'password')

User.create(name: 'Sean McNamara',
                    email: 'sean@sean.com',
                    password: 'password')

User.create(name: 'Rob Lim',
                    email: 'rob@rob.com',
                    password: 'password')

User.create(name: 'Galen Barbour',
                    email: 'galen@galen.com',
                    password: 'password')

1000.times do
  User.create(name: Faker::Name.name,
              email: Faker::Internet.email,
              password: 'password')
end

Board.create(title: 'Pumpkins', owner_id: 1, starred: false)
Board.create(title: 'Polka Dots', owner_id: 1, starred: true)
Board.create(title: 'Orbs', owner_id: 1, starred: true)
Board.create(title: 'Swirls', owner_id: 1, starred: false)

List.create(title: 'Circles', board_id: 1)
List.create(title: 'Squares', board_id: 1)
List.create(title: 'Hexagons', board_id: 1)
List.create(title: 'Bubbles', board_id: 1)
List.create(title: 'Cuboids', board_id: 1)
List.create(title: 'Ellipsoids', board_id: 1)
List.create(title: 'Inks', board_id: 1)
List.create(title: 'Colors', board_id: 1)

List.create(title: 'Sponges', board_id: 2)
List.create(title: 'Heroes', board_id: 2)
List.create(title: 'Sparkles', board_id: 2)
List.create(title: 'Eggs', board_id: 2)
List.create(title: 'Sand', board_id: 2)
List.create(title: 'Laughter', board_id: 2)

Card.create(title: 'Find all the circles. Turn them into squares.', list_id: 1)
Card.create(title: 'Draw circles', list_id: 1)
Card.create(title: 'Run in circles', list_id: 1)
Card.create(title: 'Eat circle shapes', list_id: 1)
Card.create(title: 'Swim in circles', list_id: 1)
Card.create(title: 'Erase circles', list_id: 1)


Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
