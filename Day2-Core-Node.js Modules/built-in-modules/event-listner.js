const EventEmitter = require("events")

const emiter = new EventEmitter();

emiter.on("userRegistered", (user) => {
    console.log(`${user.name} Register Successfully ... `);

});

emiter.on("userRegistered",(u)=>{
    console.log(
        `Welcome Email send to ${u.email} `
    );
    
});

emiter.on("userRegistered",(user)=>{
    console.log(`Log created for ${user.name}`);
    
});

emiter.emit("userRegistered",{
    name:"Sushant",
    email:"sushantdesai0990@gmail.com"
});
