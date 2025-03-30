export const itemArr = new Array();
itemArr.push( new Data("Pizza", "pepperoni,mushrom,mozarella",14, "Images/pizza.png"));
itemArr.push( new Data("Hamburger", "beef, cheese, lettuce",12, "Images/burger.png"));
itemArr.push( new Data("Beer", "grain, hops, yeast, water",12, "Images/beer.png"));


function Data(name,description,price,image){
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.count = 0;
}
