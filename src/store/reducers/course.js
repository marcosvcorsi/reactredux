const INITIAL_STATE = {
  activeLesson: null,
  activeModule: null,
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        { id: 1, title: 'Primeira Aula' },
        { id: 2, title: 'Segunda Aula' },
        { id: 3, title: 'Terceira Aula' }
      ]
    },
    {
      id: 2,
      title: 'Aprendendo Redux',
      lessons: [
        { id: 4, title: 'Quarta Aula' },
        { id: 5, title: 'Quinta Aula' }
      ]
    }
  ]
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_LESSON') {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    };
  }

  return state;
}
