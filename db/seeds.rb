# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: 'user1',
                    email: 'user1@user1.com',
                    password: 'password')

user2 = User.create(name: 'user2',
                    email: 'user2@user2.com',
                    password: 'password')

user3 = User.create(name: 'user3',
                    email: 'user3@user3.com',
                    password: 'password')

user4 = User.create(name: 'user4',
                    email: 'user4@user4.com',
                    password: 'password')

board1 = Board.create(title: 'board1', user_id: 1, starred: false)
board2 = Board.create(title: 'board2', user_id: 1, starred: true)
board3 = Board.create(title: 'board3', user_id: 1, starred: true)
board4 = Board.create(title: 'board4', user_id: 1, starred: false)
