import UserModel from "../../models/User";

export default function addNewSchoolUsecase(newSchoolData) {
    async function Execute() {
        const schoolModel=new UserModel({
            name: newSchoolData.name,
            city: newSchoolData.city,
            address: newSchoolData.address,
        });
        await schoolModel.save((error, newSchool) => {
            if (error) {
                return error;
            }
            return newSchool;
        });
    }
    return {
        Execute
    };
}