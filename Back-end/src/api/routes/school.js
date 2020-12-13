import SchoolController from '../controllers/SchoolController';
import isAuthenticated from '../utils/auth/authenticated';
import isAdmin from '../utils/auth/authorized';

const express = require('express');

export default function SchoolRouter() {

    const router = express.Router();

    const schoolController = SchoolController();

    router.route('/:schoolName')
        .get(isAuthenticated, schoolController.getSchoolByName);

    router.route('/')
        .get(schoolController.getAllSchools);

    router.post('/', isAuthenticated, isAdmin, schoolController.addNewSchool);

    return router;
}
