import { makeAutoObservable } from 'mobx'

export class Store {
    storage = [];
    constructor() {
        makeAutoObservable(this)
    }

    addPokemon(data) {
        let x = this.storage.some(el => el.id === data.props.id)

        if (x === false) {
            this.storage.push(data.props) 
        }
    }

    removePokemon(data) {
        const elem = this.storage.findIndex(el => el.id === data.props.id)

        return this.storage.splice(elem, 1)
        
    }

    removeContext() {
        this.storage = []
    }
}


export const pokemonStore = new Store();