import { NextFunction, Request, Response } from 'express';

class EventController {
  public sendEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.flushHeaders();
    } catch (error) {
      next(error);
    }
  };
}

export default EventController;
