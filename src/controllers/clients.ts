import { Request, Response } from "express";

class Clients {
  getAllClients(_: Request, res: Response) {
    res.send("Clients get");
  }
}

const ControllerClients = new Clients();

export default ControllerClients;
