import addNewSchoolUsecase from '../usecases/schools/addNewSchool';
import getAllSchoolsUsecase from '../usecases/schools/getAllSchools';
import getSchoolByNameUsecase from '../usecases/schools/getSchoolByName';

export default function SchoolController() {

    const getAllSchools = async (request, response, next) => {
        const allSchools = getAllSchoolsUsecase();
        await allSchools.Execute().then((schools) => {
            response.status(200).json(schools);
        }, (error) => {
            response.status(500).json(
                { error }
            );
        });
    };

    const addNewSchool = async (request, response, next) => {
        const newSchoolData = request.body;
        const addSchool = addNewSchoolUsecase(newSchoolData);
        await addSchool.Execute().then((newSchool) => {
            response.status(201).json(newSchool);
        }, (error) => {
            response.status(500).json(
                { error }
            );
        });
    };

    const getSchoolByName = async (request, response, next) => {
        const { schoolName } = request.params;
        const schoolByName = getSchoolByNameUsecase(schoolName);
        await schoolByName.Execute().then((school) => {
            response.status(200).json(school);
        }, (error) => {
            response.status(404).json(
                { error }
            );
        });
    };

    return {
        getAllSchools,
        addNewSchool,
        getSchoolByName
    };
}
