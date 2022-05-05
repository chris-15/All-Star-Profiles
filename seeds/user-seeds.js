const { User}=require("../models")

const userData=[
    {
        username: 'Reggie Miller',
        email: 'reggie@gmail.com',
        password: 'malice'
    },
    {
        username: 'Patrick Ewing',
        email: 'patrick@gmail.com',
        password: 'ewing'
    },
    {
        username: 'Hubert Davis',
        email: 'hubert@gmail.com',
        password: 'allnet'
    },
];
const seedUsers=() => User.bulkCreate(userData);
module.exports=seedUsers