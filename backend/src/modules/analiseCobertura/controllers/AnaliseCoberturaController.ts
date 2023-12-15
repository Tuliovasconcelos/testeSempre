import { Request, Response } from 'express';
import ListAnaliseCoberturaService from '../services/listAnaliseCoberturaService';
import ShowAnaliseCoberturaService from '../services/showAnaliseCoberturaService';
import { instanceToInstance } from 'class-transformer';

export default class AnaliseCoberturaController {
  public async list(request: Request, response: Response): Promise<Response> {

    const listAnaliseCobertura = new ListAnaliseCoberturaService();

    const analises = await listAnaliseCobertura.execute();

    return response.json(instanceToInstance(analises));

  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { cep } = request.params;

    const showAnaliseCobertura = new ShowAnaliseCoberturaService();

    const analise = await showAnaliseCobertura.execute({ cep });

    return response.json(instanceToInstance(analise));

  }

}
