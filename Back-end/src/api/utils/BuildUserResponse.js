export default function buildUserResponse(user){
    return Object.freeze({
        firstName: user.firstName, 
        lastName: user.lastName,
        email: user.email, 
        age: user.age, 
        address: user.address, 
        school: user.school
    });
}