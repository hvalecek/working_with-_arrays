let warriors =
    [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage: 2,
        health:17,
        warrior:false
    }
    ];

for(let i = 0; i < warriors.length; i++)
{
    let info = document.createElement("div");
    let healthInfo = document.createElement ("h1");
    let damageInfo = document.createElement("h2");
    let warriorInfo = document.createElement("h3");
    let nameInfo = document.createElement("h4");
    nameInfo.innerHTML = warriors[i].name;
    damageInfo.innerHTML = warriors[i].damage;
    healthInfo.innerHTML = warriors[i].health;
    warriorInfo.innerHTML = warriors[i].warrior;
    info.appendChild(nameInfo);
    info.appendChild(damageInfo);
    info.appendChild(healthInfo);

    if(warriors[i].health > 9 && warriors[i].damage > 1 && warriors[i].warrior == true )
    {
        document.body.appendChild(info)
    }
}
//i couldn't figure out the color red and i was getting way to frustrated so i just needed to step back and submit what i have. I understand points will be taken off but would you be willing to send me the actual code so i can implement it and learn it?
