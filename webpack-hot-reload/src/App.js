import React from 'react';

class App extends React.Component {
  getStyles() {
     return {
       root: {
         backgroundColor: 'deeppink',
         padding: '20px',
         color: 'white',
         fontFamily: 'sans-serif',
         width:'500px',

       }
     }
   }

  render () {
    const styles = this.getStyles();
    return(
      <div style={styles.root}>
        hello,nice to meet you~ beautiful girl!

      </div>
    )
  }
}

export default App;
