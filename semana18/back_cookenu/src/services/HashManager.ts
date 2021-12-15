import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export class HashManager {

  createHash = (
    plainText: string
  ): string => {

    const cost: number = 12  // parâmetro que define o tempo para execução do algoritmo
    const salt:string = genSaltSync(cost) 
    // string aleatória (exemplo: "$2a$12$fur84HHofir95ujhnb.loi") 
    // para gerar hashs diferentes mesmo quando as senhas são iguais
    const cypherText:string = hashSync(plainText, salt)

    // console.log({salt, cypherText});
    
    return cypherText
  }

  compareHash = (
    plainText:string,
    cypherText:string
  ):boolean =>{
    return compareSync(plainText, cypherText)
  }
}