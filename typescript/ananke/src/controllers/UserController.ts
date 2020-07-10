import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "João", email: "joão@vitor.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "João vitor",
        email: "joao@vitor.com",
      },
      message: {
        subject: "Welcome to our place",
        body: "we are exited to have you in our team lets do that together",
        attachment: ["img1313.png", "weinwe.exe"],
      },
    });

    return res.send();
  },

  
};
