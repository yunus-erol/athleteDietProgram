const User = require ('./User')
const DailyPrograms = require ('./DailyPrograms')
const Recipe = require ('./Recipe')
const Meal = require ('./Meal')
const Ingredients = require ('./Ingredients')



const egg = new Ingredients('Egg', 100, 10, 5, 3)
const milk = new Ingredients('Milk', 125, 2, 12, 20)
const morning = new Meal('Morning')
const eggWithMilk = new Recipe('Egg with Milk')
const diet1 = new DailyPrograms('Day 1')

eggWithMilk.addIngredients(milk)
eggWithMilk.addIngredients(egg)
morning.addIngredients(egg)
morning.addIngredients(milk)
// sabah.addRecipe(sutluYumurta)
diet1.addMeal(morning)

const yunus = new User('Yunus', 30, 'yunus@yunus.com')
const naciye = new User('Naciye', 25, 'naciye@naciye.com')
const armagan = new User('Armağan', 30, 'armagan@armagan.com')

armagan.followUser(yunus)
naciye.followUser(yunus)
yunus.followUser(naciye)
yunus.followUser(armagan)
yunus.createDailyProgram(diet1)
naciye.createDailyProgram(diet1)

// console.log(sabah)
// console.log(sutluYumurta)
// console.log(yumurta)
// yunus.postRecipie(sutluYumurta)
// console.log(sabah)
// console.log(yunus)
yunus.listFollower()
armagan.listFollower()
// listFollowers(yunus)
