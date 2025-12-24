import { prisma } from "./lib/prisma";


async function run() {
//    const createUser = await prisma.user.create({
//     data: {
//         name: "Jhankar Mahbub",
//         email: "jkr@next.com"
//         }
//    }) 

//    console.log("Created user:", createUser);

// create post for user id = 1

// const createPost = await prisma.post.create({
//     data: {
//         title: "This is title!",
//         content: "This is a big content!",
//         authorId: 1
//     }
// })
// console.log("Created Post: ", createPost);

// const createdProfile = await prisma.profile.create({
//     data: {
//        bio: "Web Dev at PH",
//        userId: 1 
//     }
// })
// console.log(createdProfile);

// retrive all user
const users = await prisma.user.findMany({
    // include:{
    //     posts: true,
    //     profile: true
    // }
    select: {
        id: true,
        name: true,
        email: true,
        posts: true,
        profile: true
    }
});
console.dir(users, { depth: Infinity });
}

run()