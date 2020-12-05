export default function buildSchoolResponse(school){
    return Object.freeze({
        name: school.name, 
        city: school.city,
        address: school.address, 
    });
}