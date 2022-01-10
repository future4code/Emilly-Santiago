# AULA 62 - Semana 21
## Testes automatizados com typesccript

### Exercício 1
a) Crie uma interface para representar o usuário
```
interface User {
	name: string
	balance: number
}
```
b) Crie uma interface para representar o usuário

```
function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
```

### Exercício 2
a) Faça um teste com um usuário com o saldo maior do que o valor de compra

```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 100
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Astrodev",
		balance: 60
	})
})
```

b) Faça um teste com um usuário com o saldo igual ao valor de compra
```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})
```

c) Faça um teste com um usuário com o saldo menor do que o valor de compra
```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})
```









