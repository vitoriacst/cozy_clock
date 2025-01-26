import { createStore } from "@stencil/store";

const { state } = createStore({
  status: 'initial',
  minutes: 0,
  seconds: 0,
  timer:0,
  squaredClicks: 0
});


export default state;
