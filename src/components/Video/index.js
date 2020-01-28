import React from 'react';

import { connect } from 'react-redux';

function Video({ activeModule, activeLesson }) {
  return (
    <div>
      <strong>Module {activeModule?.title}</strong>
      <span>Aula {activeLesson?.title}</span>
    </div>
  );
}

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule
}))(Video);
