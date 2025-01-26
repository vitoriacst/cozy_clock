import { Component, h, State } from '@stencil/core';
import state from '../../utils/store';

@Component({
  tag: 'cozy-clock',
  styleUrl: 'cozy-clock.css',
  shadow: true,
})
export class CozyClock {
  @State() isRunning: boolean = false;

  public interval: any;

  toggleCronometro() {
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
      this.startCronometro();
    } else {
      clearInterval(this.interval);
    }
  }

  startCronometro() {
    this.interval = setInterval(() => {
      if (state.seconds > 0) {
        state.seconds--;
      } else if (state.minutes > 0) {
        state.minutes--;
        state.seconds = 59;
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  addSeconds() {
    if (state.seconds < 59) {
      state.seconds += 10;
    } else if (state.minutes < 59) {
      state.seconds = 0;
      state.minutes++;
    }
  }

  addMinutes() {
    state.minutes += 1;
  }

  getFormattedRecordingTime(): string {
    const minutes = String(state.minutes).padStart(2, '0');
    const seconds = String(state.seconds).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  render() {
    return (
      <div class="bg-pink-100 shadow-lg p-6 rounded-md flex justify-center flex-col w-80 p-4">
        <div class="bg-white backdrop-blur-sm shadow-3xl rounded-md flex items-center justify-center font-bold h-16">
          <h1 class="font-sans text-gray-800">{this.getFormattedRecordingTime()}</h1>
        </div>

        <div class="flex items-center justify-center mt-4">
          <button
            type="button"
            class="text-white bg-purple-400 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-purple-800 rounded-md"
            onClick={() => this.addMinutes()}
          >
            M
          </button>
          <button
            type="button"
            class="text-white bg-purple-400 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-purple-800 rounded-md"
            onClick={() => this.addSeconds()}
          >
            S
          </button>
          <button
            type="button"
            class="text-white bg-pink-400 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-pink-800 rounded-md"
            onClick={() => this.toggleCronometro()}
          >
            {this.isRunning ? 'Pausar' : 'Iniciar'}
          </button>
          <button
            type="button"
            class="text-white bg-purple-400 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-purple-800 rounded-md"
            onClick={() => {
              state.seconds = 0;
              state.minutes = 0;
              clearInterval(this.interval);
              this.isRunning = false;
            }}
          >
            R
          </button>
        </div>
      </div>
    );
  }
}
