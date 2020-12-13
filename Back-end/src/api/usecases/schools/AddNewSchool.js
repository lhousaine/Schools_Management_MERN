import SchoolModel from '../../models/School';

export default function addNewSchoolUsecase(newSchoolData) {
    async function Execute() {
        const schoolModel = new SchoolModel({
            name: newSchoolData.name,
            city: newSchoolData.city,
            address: newSchoolData.address,
        });
        // eslint-disable-next-line no-return-await
        return await schoolModel.save().then((newSchool) => {
            return newSchool;
        }, (error) => {
            return error;
        });
    }
    return {
        Execute
    };
}
