import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
    
    CreateCourseService.execute({
        name: "NodeJS", 
        duration: 10, 
        educator: "Thiago"
    });

    CreateCourseService.execute({
        name: "React", 
        educator: "Felipe"
    });

    return response.send();

}