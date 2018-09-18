'use strict'

import React from 'react';
import Block from './block';

export default class Grid extends React.Component {
    render() {
        let arrNew = [...Array(10).keys()];
        console.log('arrNew = ', arrNew);

        let lstBlock = arrNew.map((item, i) => (
            <Block key={i} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque pariatur nostrum! Nulla facilis odit quam! <br/><br/>" repeat={i % 4} />
        ))

        return (
            <div className="grid pa2 ba b--gray fl w-100">
                {lstBlock}
            </div>
        )
    }
}