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
// const users = await prisma.user.findMany({
//     // include:{
//     //     posts: true,
//     //     profile: true
//     // }
//     select: {
//         id: true,
//         name: true,
//         email: true,
//         posts: true,
//         profile: true
//     }
// });
// console.dir(users, { depth: Infinity });

// update user data
// const updateUser = await prisma.profile.update({
//     where: {
//         userId: 1
//     },
//     data: {
//         bio: "Web Developer & Mentor",
//         dateOfBirth: "2025-12-23T14:23:05.455Z"
//     },
//     select: {
//         id: true,
//         bio: true,
//         user: {
//             select: {
//                 name: true,
//                 email: true
//             }
//         }
//     }
// })
// console.log("updated user: ", updateUser);

// delete user
// const deleteUser = await prisma.user.delete({
//     where: {
//         id: 2
//     }
// })

// console.log(deleteUser);

// get user data by id
// const getUserDataById = await prisma.user.findUnique({
//     where: {
//         id: 2
//     },
//     include:  {
//         posts: true,
//         profile: true
//     }
// })

// console.log(getUserDataById);

// upsert user
const upsertUser = await prisma.user.upsert({
    where: {
        email: "jkr@ph.com"
    },
    update: {
        name: "Jhankar Mahbub 2"
    },
    create: {
        name: "Jhankar Mahbub 3",
        email: "jkr@ph.com"
    }
})

console.log(upsertUser);
}

run()