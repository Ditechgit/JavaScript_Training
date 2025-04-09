/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Explicação : eu possuo um número inicial(nums) e um número alvo(target), eu preciso fazer com que meu número inicial somado ao próximo número do array seja mostrado no resultado como meu número alvo, porém para descobrir qual número mais o meu inicial seria o meu resultado, com isso precisei ter dois indices e no final subtrair o indice inicial menos o alvo, para descobrir o meu segundo indice.

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){ // indice inicial na posição 0, se ele for menor que o tamanho do meu array, entao ele acrescenta 1 a mais a cada vez que ele voltar
        for(let j = i + 1; j < nums.length; j++){ // indice dois precisa ser somado com o indice inicial 0 + 1, para que nao seja o mesmo indice, e cada vez que ele for menor que o tamanho do array ele acrescenta 1 a mais no valor.
            if(nums[j] === target - nums[i]) // se o indice J(2) for estritamente igual ao alvo - o array na posição do indice i, ele retorna o valor das posiçoes dos indices.
                return [i,j]
        }
    }
};
// Dado um array de inteiros nums e um inteiro target, retorne índices dos dois números de forma que eles somem target.

// Você pode assumir que cada entrada teria exatamente uma solução, e você não pode usar o mesmo elemento duas vezes.

// Você pode retornar a resposta em qualquer ordem.

// Para indice pode se usar o for ou map, o for é mais comum, mas o map é mais moderno e mais legível.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]



