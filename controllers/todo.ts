import prisma from '../config/prima';
import { Request, Response } from 'express';

export const create = async(req: Request, res: Response) => {
try {
    const { title, status } = req.body;
    const newTodo = await prisma.todo.create({
        data:{
            title: title,
            status: status
        }
    });

    res.json({ newTodo });
} catch (err) {
    console.log(err)
    res.status(500).json({ message: "Server Error" });
}
};

export const list = async(req: Request, res: Response) => {
    try {
    const todos = await prisma.todo.findMany()
    res.json({ todos });
    } catch (err){
    console.log(err)
    res.status(500).json({ message: "Server Error" });
    }
   
};

export const update = async(req: Request, res: Response) => {
    try{
    const { id } = req.params
    const { title, status } = req.body
    const updated = await prisma.todo.update({
        where:{
            id: Number(id)
        },
        data:{
            title: title,
            status: status
        }
    });
    
    res.json({ updated });
    } catch(err) {
    console.log(err)
    }
    
};

export const remove = async(req: Request, res: Response) => {
    try{
    const { id } = req.params
    const deleted = await prisma.todo.delete({
        where: {
            id: Number(id)
        }
    });
    res.json({ deleted });
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" });
    }
    
};