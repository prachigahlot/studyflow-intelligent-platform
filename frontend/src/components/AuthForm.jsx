import { useState } from 'react';

const AuthForm = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="max-w-md mx-auto mt-24 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        {type === 'login' ? 'Login' : 'Register'}
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ email, password });
        }}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-indigo-600"
        >
          {type === 'login' ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
