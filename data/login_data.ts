
export const negativeTests: { caseName: string; username: string; password: string; errorMessage: string }[] = [
    { caseName: 'incorrect password', username: 'hongducdev', password: '12345', errorMessage: 'Password is incorrect' },
    { caseName: 'unregistered username', username: 'hongducdev1', password: '123456', errorMessage: 'Account does not exist' },
    { caseName: 'empty username', username: '', password: '123456', errorMessage: 'Please fill in all fields' },
    { caseName: 'empty password', username: 'hongducdev', password: '', errorMessage: 'Please fill in all fields' },
  ];
  
  export const positiveTest: { username: string; password: string } = {
    username: 'hongducdev',
    password: '123456',
  };