/**
 * Concentra as informações estáticas do header nessa classe.
 * 
 * Esse esforço visa diminuir a necessidade de alteração
 * do template HTML para a inserção de dados estáticos.
 * 
 * @since 11/2023
 * @author Bruno Carneiro
 */
export function getHeaderInfo(): HeaderInfo {
    return {
        brand: {
            label: 'SIREA!'
        },
        ctas: [
            {
                label: 'cta1',
                cb: () => console.log('cta1')
            },
            {
                label: 'cta2',
                cb: () => console.log('cta2')
            }
        ]
    }
}

/**
 * Representa uma logo
 */
export type Brand = {
    imgPath?: string,
    label?: string,
}

/**
 * Representa um componente
 * que dispara uma ação
 * (Call to action)
 */
export type Cta = {
    imgPath?: string,
    label?: string,
    cb: Function
}

export type HeaderInfo = {
    brand: Brand,
    ctas: Cta[]
}
  