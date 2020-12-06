import SchoolModel from '../../models/School';

export default function getSchoolByNameUsecase(schoolName) {
    async function Execute() {
        // eslint-disable-next-line no-return-await
        return await SchoolModel.find({ name: schoolName }, {
            _id: 0, name: 1, city: 1, address: 1
        }).then((school) => {
            return school;
        }).catch((error) => {
            return error;
        });
    }
    return {
        Execute
    };
}
