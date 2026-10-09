// src/models/Usuario.ts
export class Usuario {
  #nome: string;
  #idade: number;
  #senha: string;

  constructor(nome: string, idade: number, senha: string) {
    this.#nome = nome;
    this.#idade = idade;
    this.#senha = senha;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.#nome} e tenho ${this.#idade} anos.`;
  }

  verificarSenha(senhaDigitada: string): boolean {
    return this.#senha === senhaDigitada;
  }

  // Novo método para Redefinir a senha
  redefinirSenha(novaSenha: string): void {
    this.#senha = novaSenha;
  }
}