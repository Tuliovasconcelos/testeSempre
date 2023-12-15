import { Request, Response } from 'express';
import ListPlanosService from '../services/ListPlanosService';
import ShowPlanoService from '../services/ShowPlanoService';
import { instanceToInstance } from 'class-transformer';

export default class PlanosController {
  public async index(request: Request, response: Response): Promise<Response> {

    const listPlanos = new ListPlanosService();

    const planos = await listPlanos.execute();

    return response.json(instanceToInstance(planos));

  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const showPlano = new ShowPlanoService();

    const plano = await showPlano.execute({ planoId: Number(id) });

    return response.json(instanceToInstance(plano));

  }

}
