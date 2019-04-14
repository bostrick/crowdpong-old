
import { observable, action } from "mobx"

export interface IGame {

  readonly COURT_WIDTH : number;
  readonly COURT_HEIGHT  : number;
  readonly WALL_WIDTH  : number;

  readonly PADDLE_HEIGHT  : number;
  readonly PADDLE_OFFSET  : number;

  ball_x: Array<number>;
  paddle_one_x: number;
  paddle_two_x: number;

  do_paddle_one_up() : void;
  do_paddle_one_down() : void;
  do_paddle_two_up() : void;
  do_paddle_two_down() : void;

}

export class Game implements IGame {

    readonly PADDLE_DELTAV = 1.0;
    readonly BALL_DELTAV = 1.0;

    readonly COURT_WIDTH = 800;
    readonly COURT_HEIGHT = 600;
    readonly WALL_WIDTH = 10;

    readonly PADDLE_HEIGHT = 120;
    readonly PADDLE_OFFSET = 20;

    readonly PADDLE_DELTAX = 4;

    private timer = null;

    @observable ball_x = [this.COURT_WIDTH/2.0, this.COURT_HEIGHT/2.0];
    @observable ball_v = [1.0, 1.0];

    @observable paddle_one_x = this.COURT_HEIGHT/2.0;
    @observable paddle_one_v = 0.0;

    @observable paddle_two_x = this.COURT_HEIGHT/2.0;
    @observable paddle_two_v = 0.0;

    @observable score_one = 0;
    @observable score_two = 0;

    @action
    do_paddle_one_up() { this.paddle_one_x -= this.PADDLE_DELTAX; }

    @action
    do_paddle_one_down() { this.paddle_one_x += this.PADDLE_DELTAX; }

    @action
    do_paddle_two_up() { this.paddle_two_x -= this.PADDLE_DELTAX; }

    @action
    do_paddle_two_down() { this.paddle_two_x += this.PADDLE_DELTAX; }

    @action
    do_step = () => { 
      console.log("step");
      console.log(this);
      this.ball_x[0] += this.ball_v[0];
      this.ball_x[1] += this.ball_v[1];
    }

    @action
    start() {
      this.timer = setInterval(this.do_step, 10);
    }

    @action
    stop() {
      this.timer.cancel();
    }



}

