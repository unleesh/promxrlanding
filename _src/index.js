// CSS and SASS files
import './index.scss';

import { default as Tobi } from '@midzer/tobii'
const tobi = new Tobi()

// Remove the two following lines to remove the product hunt floating prompt
import FloatingPrompt from 'producthunt-floating-prompt'
FloatingPrompt({ name: '싱글들의 만남에 참여하세요', url: 'https://discord.gg/jKcrNExZA4', bottom: '96px', width: '450px' })

// Remove the following lines to remove the darkmode js
// import Darkmode from 'darkmode-js'
// function addDarkmodeWidget() {
//   new Darkmode().showWidget()
// }
// window.addEventListener('load', addDarkmodeWidget)
