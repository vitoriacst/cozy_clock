import { Component, h } from '@stencil/core';

@Component({
  tag: 'cozy-clock',
  styleUrl: 'cozy-clock.css',
  shadow: true,
})
export class CozyClock {
  render() {
    return (
      <div class="bg-blue-200 shadow-lg p-6 rounded-md flex justify-center flex-col w-96 p-4">
        <div class="bg-white/30 backdrop-blur-sm shadow-md bg-gray-200 rounded-lg flex items-center justify-center font-bold h-24">
          <h1 class="font-sans">00 : 00</h1>
        </div>

        <div class="flex items-center justify-center gap-4 mt-4">
          <button
            type="button"
            class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
          >
            M
          </button>
          <button
            type="button"
            class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
          >
            S
          </button>
          <button
            type="button"
            class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
          >
            ST/ST
          </button>
          <button
            type="button"
            class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
          >
            R
          </button>
        </div>
      </div>
    );
  }
}
