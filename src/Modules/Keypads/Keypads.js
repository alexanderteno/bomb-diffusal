import React, { Component } from 'react';
import './Keypad.scss';

import keypads from '../images/on-the-subject-of-keypads.svg'

import at from './symbols/a-t.png';
import ae from './symbols/ae.png';
import alien3 from './symbols/alien-3.png';
import backwardsC from './symbols/backwards-c.png';
import backwardsE from './symbols/backwards-e.png';
import broken3 from './symbols/broken-3.png';
import copyright from './symbols/copyright.png';
import filledStar from './symbols/filled-star.png'
import flat6 from './symbols/flat-6.png';
import hWithHat from './symbols/h-with-hat.png';
import hWithTail from './symbols/h-with-tail.png';
import hollowStar from './symbols/hollow-star.png';
import hy from './symbols/hy.png';
import lambda from './symbols/lambda.png';
import menorah from './symbols/menorah.png';
import mirrorK from './symbols/mirror-k.png';
import newParagraph from './symbols/new-paragraph.png';
import nose from './symbols/nose.png';
import omega from './symbols/omega.png';
import smileyFace from './symbols/smiley-face.png';
import squiggleZ from './symbols/squiggle-z.png';
import stickFigure from './symbols/stick-figure.png';
import strikeThroughEquals from './symbols/strike-through-equals.png';
import swirlO from './symbols/swirl-o.png';
import tb from './symbols/t-b.png';
import upsideQuestionMark from './symbols/upside-question-mark.png';
import BaseModule from '../../BaseModule/BaseModule';

const SETS = [
    [stickFigure, at, lambda, squiggleZ, hy, hWithTail, backwardsC],
    [backwardsE, stickFigure, backwardsC, swirlO, hollowStar, hWithTail, upsideQuestionMark],
    [copyright, nose, swirlO, mirrorK, broken3, lambda, hollowStar],
    [flat6, newParagraph, tb, hy, mirrorK, upsideQuestionMark, smileyFace],
    [menorah, smileyFace, tb, backwardsC, newParagraph, alien3, filledStar],
    [flat6, backwardsE, strikeThroughEquals, ae, menorah, hWithHat, omega]
];

const getUniqueSymbolsFromSets = (sets) => {
    const elementSet = {};
    sets.forEach((set) => {
        set.forEach((symbol) => {
            elementSet[symbol] = symbol;
        });
    });
    return Object.values(elementSet);
}

const defaultState = {
    symbols: [],
};

class Keypads extends Component {

    state = defaultState;

    reset = () => {
        this.setState(defaultState);
    }

    addSymbol = (symbol) => {
        this.setState((prevState) => {
            const symbols = prevState.symbols.slice(0);
            symbols.push(symbol);
            return { symbols };
        });
    }

    render() {

        const relevantSets = this.state.symbols.length ? SETS.filter((set) => {
            return this.state.symbols.every((symbol) => {
                return set.includes(symbol);
            })
        }) : SETS;

        const uniqueSymbols = getUniqueSymbolsFromSets(relevantSets).filter((symbol) => {
            return !this.state.symbols.includes(symbol);
        });

        return (
            <BaseModule title="Keypads" thumbnail={keypads} reset={this.reset}>
                {
                    this.state.symbols.length < 4 ? (
                        <div className="query-mode">
                            <h2>Options</h2>
                            <div className="options">
                                {
                                    uniqueSymbols.map((symbol) => (
                                        <img className="option" src={symbol} alt="symbol" key={symbol} onClick={() => this.addSymbol(symbol)}></img>
                                    ))
                                }
                            </div>
                        </div>
                    ) : (
                            <div className="solution">
                            <h2>Solution</h2>
                            <p>Read from left to right.</p>
                                {
                                    relevantSets.find(() => true).filter((symbol) => {
                                        return this.state.symbols.includes(symbol);
                                    }).map((symbol) => <img className="option" src={symbol} alt="symbol" key={symbol}></img>)
                                }
                            </div>
                        )
                }
            </BaseModule>
        );
    }

}

export default Keypads;