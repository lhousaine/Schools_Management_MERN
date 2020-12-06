import SchoolModel from '../../models/School';

export default function getAllSchoolsUsecase() {

    function Execute() {
        return SchoolModel.find({}, {
            _id: 0, name: 1, city: 1, address: 1
        }, (error, schools) => {
            if (schools.length > 0 && schools) {
                return schools;
            }
            return { message: 'No school found' };
        }).catch((error) => {
            console.log(error);
            return {
                error
            };
        });

    }
    return {
        Execute
    };
}
