const user = {
    name:"firstName",
    address:"address",
    getName:function(){return this.name;},
    getAddress(){
        return this.address;
    },
    setName( name){ this.name = name},
}


console.log(user.getName());
console.log(user.getAddress());
user.setName("aniket");

console.log(user.getName());
