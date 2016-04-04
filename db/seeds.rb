# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# # data = JSON.parse(File.read("http://www.google.com"))
# Exercise.destroy_all
# Exercise.create!(data)
Day.destroy_all
Exercise.destroy_all

Day.create(name: 'Monday',)
Day.create(name: 'Tuesday')
Day.create(name: 'Wednesday')
Day.create(name: 'Thursday')
Day.create(name: 'Friday')
Day.create(name: 'Saturday')
Day.create(name: 'Sunday')

Exercise.create(name: 'Situp', quantity: 30, calorie: 100, day_id:1)
Exercise.create(name: 'Pushup', quantity: 40, calorie:200, day_id:2)
Exercise.create(name: 'Jumprope', quantity: 200, calorie:50, day_id:3)
