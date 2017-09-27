# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

user1 = User.create(name: 'Yayoi Kusama',
                    email: 'y.kusama@art.jp',
                    password: 'password')

user2 = User.create(name: 'Sean McNamara',
                    email: 'sean@sean.com',
                    password: 'password')

user3 = User.create(name: 'Rob Lim',
                    email: 'rob@rob.com',
                    password: 'password')

user4 = User.create(name: 'Galen Barbour',
                    email: 'galen@galen.com',
                    password: 'password')

board1 = Board.create(title: 'Pumpkins', owner_id: 1, starred: false)
board2 = Board.create(title: 'Polka Dots', owner_id: 1, starred: true)
board3 = Board.create(title: 'Orbs', owner_id: 1, starred: true)
board4 = Board.create(title: 'Swirls', owner_id: 1, starred: false)

list1 = List.create(title: 'Circles', board_id: 1)
list2 = List.create(title: 'Squares', board_id: 1)
list3 = List.create(title: 'Hexagons', board_id: 1)
list4 = List.create(title: 'Bubbles', board_id: 1)
list5 = List.create(title: 'Cuboids', board_id: 1)
list6 = List.create(title: 'Ellipsoids', board_id: 1)
list7 = List.create(title: 'Inks', board_id: 1)
list8 = List.create(title: 'Colors', board_id: 1)

list9 = List.create(title: 'Sponges', board_id: 2)
list10 = List.create(title: 'Heroes', board_id: 2)
list11 = List.create(title: 'Sparkles', board_id: 2)
list12 = List.create(title: 'Eggs', board_id: 2)
list13 = List.create(title: 'Sand', board_id: 2)
list14 = List.create(title: 'Laughter', board_id: 2)

card1 = Card.create(title: 'Find all the circles. Turn them into squares.', list_id: 1)
card2 = Card.create(title: 'Draw circles', list_id: 1)
card3 = Card.create(title: 'Run in circles', list_id: 1)
card4 = Card.create(title: 'Eat circle shapes', list_id: 1)
card5 = Card.create(title: 'Swim in circles', list_id: 1)
card6 = Card.create(title: 'Erase circles', list_id: 1)


comment1 = Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
comment2 = Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
comment3 = Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
comment4 = Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
comment5 = Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
comment6 = Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
comment7 = Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
comment8 = Comment.create(card_id: 1, author_id: 1, body: Faker::Lorem.paragraph)
