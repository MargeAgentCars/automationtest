/*Here are the things that should be included:
1. An object named "restaurantMenu".
2. Properties that contains
    a. The name of the restaurant
    b. The items that the restaurant sells which includes the names and prices. 
    Price can just be a number. Limit this to 5 items.
    c. A method that lists out all the menu items with their prices via an 
    alert.
    d. A method that allows the user to select which menu item that the user 
    wants to order via a prompt. Simply alert the menu item back to the user.
*/
var restaurantMenu = {
    name: "Somebody's food",
    menuItems: [
        {
            name:"Patacones",
            price:3
        },
        {
            name:"Ramen",
            price:4
        }, 
        {
            name:"Burrito",
            price: 2
        },
        {
            name:"Tacos",
            price:6,
        },
        {
            name:"Pizza",
            price:7
        }
    ],

    allItems: function(){
        var menuList = "Plates: \n"
        for(let i=0;i<this.menuItems.length;i++){
            //console.log(this.menuItems[i].name)
            //console.log(this.menuItems[i].price)
            menuList += this.menuItems[i].name + ": $" + this.menuItems[i].price+"\n"
            
        }
        alert(menuList)
        var number = prompt('Please enter your choice')
        this.selectItem(number)
    },

    selectItem: function(number){
        
        alert(this.menuItems[number].name)
        
    }
}
