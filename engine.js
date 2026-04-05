// engine.js
import { KANAS, WORDS_DB } from './data.js';

export class GameEngine {
    constructor() {
        this.config = { show: 'q', ans: 'pt', mode: 'words' };
        this.state = { current: null, hits: 0, errors: 0, lives: 3, tries: 3 };
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    playSfx(type) {
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.connect(gain); gain.connect(this.audioCtx.destination);
        osc.frequency.setValueAtTime(type === 'ok' ? 880 : 220, this.audioCtx.currentTime);
        gain.gain.setTargetAtTime(0, this.audioCtx.currentTime, 0.1);
        osc.start(); osc.stop(this.audioCtx.currentTime + 0.3);
    }

    speak(text) {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'ja-JP';
        u.rate = 0.8;
        window.speechSynthesis.speak(u);
    }

    getNext() {
        const pool = this.config.mode === 'letters' ? KANAS : WORDS_DB;
        this.state.current = pool[Math.floor(Math.random() * pool.length)];
        this.state.tries = 3;
        return this.state.current;
    }

    validate(input) {
        const userVal = input.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const correctVal = this.state.current[this.config.ans].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        // No modo de exibição Hiragana, se responder em PT, aceitamos o JP (Romaji) como secundário
        const isCorrect = (userVal === correctVal || (this.config.ans === 'pt' && userVal === this.state.current.jp));
        
        if (isCorrect) {
            this.state.hits++;
            this.playSfx('ok');
            this.speak(this.state.current.q);
            return { status: 'success' };
        } else {
            this.state.tries--;
            this.playSfx('error');
            if (this.state.tries <= 0) {
                this.state.lives--;
                this.state.errors++;
                return { status: 'fail', answer: this.state.current[this.config.ans] };
            }
            return { status: 'retry', remaining: this.state.tries };
        }
    }
}