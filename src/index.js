import React from 'react';
import ReactDOM from 'react-dom';
import SelectWithFilter from './containers/SelectWithFilter'

const testData = [];

for (let i = 0; i < 150; i++) {
    testData.push(`Элемент ${i}`)
}

ReactDOM.render(<SelectWithFilter items={testData} />, document.getElementById('root'));