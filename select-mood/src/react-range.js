
import * as React from 'react';
import { Range } from 'react-range';

class SuperSimple extends React.Component {
  state = { values: [17] };
  render() {
    return (
      <Range
        step={1}
        min={0}
        max={17}
        values={this.state.values}
        onChange={(values) => {
            this.setState({ values })
            let value = values[0]
            //console.log(value)
            const matches = document.querySelectorAll('.mood')
            matches.forEach( (match) =>{
                match.classList.remove('active')
            } )

            document.querySelector('.mood-'+value).classList.add('active')
        }}
        onFinalChange={ (values) => {
            this.props.MoodPicked(values[0]);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc'
        
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
              backgroundColor: '#999',
              borderRadius: '10px'
            }}
          />
        )}
      />
    );
  }
} 

export default SuperSimple;