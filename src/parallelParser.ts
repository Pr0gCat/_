import Piscina from 'piscina';
import { isMainThread } from 'worker_threads';

import Lexer from './lexer';

export default class ParallelParser {
    executor: Piscina;
    constructor() {
        this.executor = new Piscina({ filename: __filename });
    }

    /**
     * Start the parser
     */
    public start(entryfile: string) {}
}

export function parserWorker() {
    if (isMainThread) {
        throw new Error('Do not call this function from the main thread!');
    }
}
