import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import EventController from '@/controllers/events.controller_OBS';

class EventsRoute implements Routes {
  public path = '/';
  public router = Router();
  public eventController = new EventController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.eventController.sendEvent);
  }
}

export default EventsRoute;
