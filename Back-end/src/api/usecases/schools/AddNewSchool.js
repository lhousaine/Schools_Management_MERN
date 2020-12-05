import UserModel from "../../models/User";

export default function AddNewSchoolUsecase(school) {
    async function Execute() {
        const newSchool=new UserModel({
            name: school.name,
            city: school.city,
            address: schoo.address,
        });
        await newSchool.save((error, school) => {
            if (error) {
                return error;
            }
            return school;
        });
    }
    return {
        Execute
    };
}