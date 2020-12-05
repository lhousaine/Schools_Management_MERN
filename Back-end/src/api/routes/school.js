import express, { request, response } from 'express';
import SchoolController from '../controllers/SchoolController';

export default function schoolRouter() {

    const router = express.Router();

    const schoolController = SchoolController();

    router.route('/')
        .get(schoolController.getAllSchools);

    router.route('/')
        .post(schoolController.addNewSchool);

    router.route('/:schoolName')
        .get(schoolController.addNewSchool);
        
    return router;
}
