class Cache {
    list = []

    addContext(data) {
        this.list = []
        this.list.push(data)         
        return this.list
    } 
}

export const pokemonPageCache = new Cache()

