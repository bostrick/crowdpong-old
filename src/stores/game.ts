
import { observable, action } from "mobx"

export interface IGame {

  readonly PADDLE_DELTAV : number;
  ball_x: Array<number>;
  ball_v: Array<number>;

  do_paddle_one_up() : void;
  do_paddle_one_down() : void;
  do_paddle_two_up() : void;
  do_paddle_two_down() : void;

}

export class Game implements IGame {

    readonly PADDLE_DELTAV = 1.0;
    readonly BALL_DELTAV = 1.0;

    readonly COURT_LENGTH = 800;
    readonly COURT_HEIGHT = 600;
    readonly PADDLE_HEIGHT = 20;

    @observable ball_x = [0.0, 0.0];
    @observable ball_v = [0.0, 0.0];

    @observable paddle_one_x = [0.0, 0.0];
    @observable paddle_one_v = 0.0;

    @observable paddle_two_x = [0.0, 0.0];
    @observable paddle_two_v = 0.0;

    @observable score_one = 0;
    @observable score_two = 0;

    @action
    do_paddle_one_up() { this.paddle_one_v += this.PADDLE_DELTAV; }

    @action
    do_paddle_one_down() { this.paddle_one_v -= this.PADDLE_DELTAV; }

    @action
    do_paddle_two_up() { this.paddle_two_v += this.PADDLE_DELTAV; }

    @action
    do_paddle_two_down() { this.paddle_two_v -= this.PADDLE_DELTAV; }

}

