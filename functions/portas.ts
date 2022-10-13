import PortaModel from "../model/porta";

export function criarPortas(qtde: number, portaComPresente: number): PortaModel[] {
    return Array.from({length: qtde},(_, i) => {
        const numero = i + 1
        const temPresente = numero === portaComPresente
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada:PortaModel):PortaModel[] {
    return portas.map( portaAtual => {
        const igualModificicada = portaAtual.numero === portaModificada.numero;
        if(igualModificicada) {
            return portaModificada;
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desSelecionada()
        }
    })
}
   