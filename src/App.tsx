import { useState } from 'react';
import './App.css';
import { Usuario } from './models/Usuario';

const usuarioPadrao = new Usuario('Lucas', 22, '12345');

function App() {
  const [tentativaSenha, setTentativaSenha] = useState('');
  const [mensagemSenha, setMensagemSenha] = useState('');

  const [novaSenha, setNovaSenha] = useState('');
  const [mensagemRedefinicao, setMensagemRedefinicao] = useState('');

  const handleVerificarSenha = () => {
    const correta = usuarioPadrao.verificarSenha(tentativaSenha);
    if (correta) {
      setMensagemSenha('✅ Senha correta! Acesso permitido.');
    } else {
      setMensagemSenha('❌ Senha incorreta! Tente novamente.');
    }
  };

  const handleRedefinirSenha = () => {
    if (novaSenha.trim() === '') {
      setMensagemRedefinicao('⚠️ Digite uma senha válida.');
      return;
    }
    usuarioPadrao.redefinirSenha(novaSenha);
    setMensagemRedefinicao('✅ Senha redefinida com sucesso!');
    setNovaSenha('');
    setTentativaSenha('');
    setMensagemSenha('');
  };

  return (
    <div className="app-shell">
      <main className="user-card">
        <header className="user-header">
          <div className="user-avatar">L</div>
          <div className="user-summary">
            <span className="eyebrow">Perfil do usuário</span>
            <h1>Lucas</h1>
            <p className="user-description">22 anos · Segurança da conta</p>
          </div>
        </header>

        <p className="welcome-message">{usuarioPadrao.apresentar()}</p>

        <section className="security-panel">
          <h2>Testar senha</h2>
          <div className="input-row">
            <input
              className="text-input"
              type="password"
              placeholder="Digite a senha..."
              value={tentativaSenha}
              onChange={(e) => setTentativaSenha(e.target.value)}
            />
            <button type="button" className="primary-button" onClick={handleVerificarSenha}>
              Verificar
            </button>
          </div>
          {mensagemSenha && (
            <p
              className={`status-message ${mensagemSenha.includes('✅') ? 'success' : 'error'}`}
              aria-live="polite"
            >
              {mensagemSenha}
            </p>
          )}
        </section>

        <section className="security-panel">
          <h2>Redefinir senha</h2>
          <div className="input-row">
            <input
              className="text-input"
              type="password"
              placeholder="Digite a nova senha..."
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
            />
            <button type="button" className="primary-button alt" onClick={handleRedefinirSenha}>
              Redefinir
            </button>
          </div>
          {mensagemRedefinicao && (
            <p
              className={`status-message ${mensagemRedefinicao.includes('✅') ? 'success' : 'warning'}`}
              aria-live="polite"
            >
              {mensagemRedefinicao}
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;