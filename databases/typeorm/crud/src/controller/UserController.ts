import {getRepository, Table} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export default {
	async index(req: Request, res: Response) {
		const users = await getRepository(User).find();

		return res.json(users)
	},

	async create(req: Request, res: Response) {
		const user = await getRepository(User).save(req.body)

		return res.json(user);
	},

	async show(req: Request, res: Response) {
		const user = await getRepository(User).findOne(req.params.id);

		return res.json(user);
	},

	async update(req: Request, res: Response) {
		const user = await getRepository(User).update(req.params.id, { name: req.body.name });

		if (user.affected === 1) {
			const updatedUser = await getRepository(User).findOne(req.params.id);
			return res.json(updatedUser);
		}

		return res.json('User not found');
	},

	async delete(req: Request, res: Response) {
		const user = await getRepository(User).delete(req.params.id);

		if (user.affected !== 1) {
			return res.status(404).json({ error: 'User not found'})
		}

		return res.status(204).json();
	}
}