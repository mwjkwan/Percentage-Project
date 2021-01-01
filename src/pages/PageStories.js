import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

const styles = {
  outer: {
    display: 'flex',
  },
  sticky: {
    flex: 1,
    position: 'sticky',
    top: 0,
    border: '3px solid orchid',
    maxHeight: '100vh',
  },
  scrollText: {
    width: '50vw',
  },
  step: {
    margin: '50vh 0',
    border: '1px solid gray',
  }
}

const PageStories = () => {
  // TODO: read https://reactjs.org/docs/hooks-overview.html for context
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div style={styles.outer}>
      <div style={styles.sticky}>
        {/* TODO: Replace this with fixed images that change based on currentStepIndex */}
        I'm sticky. The current triggered step index is: {currentStepIndex}
      </div>
      <div style={styles.scrollText}>
        {/* In order to get rid of the dotted lines, delete "debug" */}
        <Scrollama onStepEnter={onStepEnter} debug>
          {/* TODO: What should [1, 2, 3, 4] be replaced with? */}
          {/* TODO: Read for context on map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
          {[1, 2, 3, 4].map((_, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <div style={{ ...styles.step, opacity: currentStepIndex === stepIndex ? 1 : 0.2 }}>
                {/* TODO: This div contains the scrolling elements. What should you replace this with? */}
                I'm a Scrollama Step of index {stepIndex}
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
};
export default PageStories;
